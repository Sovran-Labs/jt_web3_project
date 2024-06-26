import { ethers, Wallet } from "ethers";
import { AddLiquidityTx, Pool, Token } from "../../types";
import { TICKER, ZERO_ADDRESS } from "../../config/constants";
import { get_token, get_balance, get_pool, sort_tokens, is_balance, get_quote, is_native } from "../utils";


export const get_add_liq_tx = async(
    signer: Wallet, 
    addressA: string,
    amountA: string | null,
    addressB: string,
    amountB: string | null,
    max: boolean,
    network: 'TESTNET' | 'MAINNET',
    slipage: number,
    deadline: number | null | undefined,
): Promise<AddLiquidityTx> => {

    let addTx: AddLiquidityTx;
    
    try {

        const token_a: Token = await get_token( addressA, network )
        const token_b: Token = await get_token( addressB, network )
        const { token0, token1, amount0, amount1 } = sort_tokens( token_a, token_b, amountA, amountB )

        const pool: Pool = await get_pool( token0, token1, signer )

        if ( await is_balance(signer, addressA, addressB) === 0 )
            throw new Error(`balance is empty for token ${TICKER[addressA]} or ${TICKER[addressB]} or both.`)

        if ( max )
        {
            addTx = await get_max_liq( signer, pool, slipage, deadline, network )
        }
        else
        {
            let addr: string = amount0 ? pool.tokenA.address : pool.tokenB.address
            let amount: bigint = amount0 ? amount0 : amount1!
            addTx = await get_liq( signer, pool, addr, amount, slipage, deadline, network )
        }

        return addTx

    } catch (error: any) {
        
        throw error

    }
}

const get_max_liq = async(
    signer: Wallet, 
    pool: Pool,
    slipage: number,
    deadline: number | null | undefined,
    network: 'TESTNET' | 'MAINNET',
): Promise<AddLiquidityTx> => {

    try {

        const balanceA = await get_balance( is_native( pool.tokenA.address) ? ZERO_ADDRESS : pool.tokenA.address, signer )
        const balanceB = await get_balance( is_native( pool.tokenB.address) ? ZERO_ADDRESS : pool.tokenB.address, signer )

        const quoteB = get_quote( balanceA.string, pool.tokenA, pool.tokenB, pool )
        const quoteA = get_quote( balanceB.string, pool.tokenB, pool.tokenA, pool )

        
        /*
         * @dev If the amount of token B we can buy is bigger than our actual balance of token B that means
         *      that token B is our max token to add
         */
        const b_is_min_balance: boolean = parseFloat( quoteB ) > parseFloat( balanceB.string)

        let balance_a: bigint = b_is_min_balance ? ethers.parseUnits( quoteA, balanceA.decimals ) : balanceA.bigint
        let balance_b: bigint = b_is_min_balance ? balanceB.bigint : ethers.parseUnits( quoteB, balanceB.decimals )
        let balance_a_min: bigint = balance_a * BigInt( 100 * 100 - (slipage * 100) ) / BigInt( 100 * 100 )
        let balance_b_min: bigint = balance_b * BigInt( 100 * 100 - (slipage * 100) ) / BigInt( 100 * 100 )

        
        return {
            signer: signer,
            pool: pool,
            tokenA: pool.tokenA,
            tokenB: pool.tokenB,
            amountADesired: balance_a,
            amountBDesired: balance_b,
            amountAMin: balance_a_min,
            amountBMin: balance_b_min,
            to: signer.address,
            deadline: deadline ?? Math.floor( Date.now() / 1000 ) + 60 * 20, // 20 minutes from the current Unix time
            network: network
        }

    } catch (error: any) {

        throw error
        
    }
}

const get_liq = async(
    signer: Wallet, 
    pool: Pool, 
    addr: string, 
    amount: bigint, 
    slipage: number, 
    deadline: number | null | undefined,
    network: 'TESTNET' | 'MAINNET',
): Promise<AddLiquidityTx> => {

    try {
        
        const token_1: Token = BigInt( pool.tokenA.address ) === BigInt( addr ) ? pool.tokenA : pool.tokenB
        const token_2: Token = BigInt( pool.tokenA.address ) !== BigInt( addr ) ? pool.tokenA : pool.tokenB

        const balance_1 = await get_balance( token_1.address, signer )
        const balance_2 = await get_balance( token_2.address, signer )

        const amount_1: bigint = amount
        const amount_2 = ethers.parseUnits( get_quote( ethers.formatUnits( amount_1, token_1.decimals ), token_1, token_2, pool ), token_2.decimals )
        
        const amount_1_min: bigint = amount_1 * BigInt( 100 * 100 - (slipage * 100) ) / BigInt( 100 * 100 )
        const amount_2_min: bigint = amount_2 * BigInt( 100 * 100 - (slipage * 100) ) / BigInt( 100 * 100 )

        console.log("amount 1: ", ethers.formatUnits( amount_1, token_1.decimals))
        console.log("balance 1: ", balance_1.string)
        if ( amount_1 > balance_1.bigint )
            throw new Error(`${ TICKER[ token_1.address ] }: Unsufficient balance.`)
        if ( amount_2 > balance_2.bigint )
            throw new Error(`${ TICKER[ token_2.address ] }: Unsufficient balance.\nNeeded ${ ethers.formatUnits(amount_2, token_2.decimals) } but got ${ balance_2.string }`)


        return {
            signer: signer,
            pool: pool,
            tokenA: token_1,
            tokenB: token_2,
            amountADesired: amount_1,
            amountBDesired: amount_2,
            amountAMin: amount_1_min,
            amountBMin: amount_2_min,
            to: signer.address,
            deadline: deadline ?? Math.floor( Date.now() / 1000 ) + 60 * 20, // 20 minutes from the current Unix time
            network: network
        }

    } catch(error) {

        throw error

    }
}