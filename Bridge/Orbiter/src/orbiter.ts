import { Account } from "starknet";
import { Wallet, ethers } from "ethers";
import { get_amounts } from "./calldatas";
import { TICKER } from "../config/constant";
import { Chains, TxTransferArgs } from "../types";
import { evm_transfer } from "../transfer/evm_transfer";
import { starknet_transfer } from "./transactions/starknet_transfer";
import { get_balance, log_routes, resolve_provider, not_enough_balance } from "./utils";
import { get_chain, resolve_maker, get_token, resolve_cross_address, append_network_target } from "./utils/bridge";






/**
 * @name swap
 * @param evmSigner     // etherjs Wallet instance
 * @param starkSigner   // starknet Account instance
 * @param token         // Address of token to be swapped
 * @param fromChain     // Source network's name
 * @param toChain       // Destination network's name
 * @param amount        // (optional) Amount to be sent
 * @param max           // (optional) If set to true, will try to bridge all the balance of the signer
 * @param network       // (optional) In testnet or mainnet
 * 
 */
export const bridge = async( swap: {
    evmSigner: Wallet,
    starkSigner: Account,
    token: string,
    fromChain: Chains, 
    toChain: Chains,
    
    amount?: string,
    max?: boolean,
    network?: 'TESTNET' | 'MAINNET' 
}): Promise<void> => {
    
    const network = swap.network ?? 'TESTNET'
    const max = swap.max ?? false
    const from_signer = swap.fromChain === "starknet" ? swap.starkSigner : swap.evmSigner

    if ( max === false && swap.amount === undefined)
        throw("You need to specify an amount or set 'max' parameter to true.")

    const from_chain = get_chain(swap.fromChain, network)
    const to_chain   = get_chain(swap.toChain, network)
    
    const maker = resolve_maker( swap.token, from_chain, to_chain, network )
    
    const from_provider = resolve_provider( from_chain.id )
    const from_token    = get_token( maker, swap.fromChain, from_provider )
    const from_balance  = await get_balance( from_signer, from_token )

    if ( max === false && swap.amount && not_enough_balance( from_token, swap.amount, from_balance ) )
        throw(`${ network }: not enough balance of ${ TICKER[ from_token.address ] } amount is ${ swap.amount } but balance is ${ from_balance }`)


    const amount = max ? from_balance : swap.amount!
    const { payAmount, receiveAmount } = get_amounts( from_token, maker, amount, max )

    // VERY IMPORTANT: we need to append this number to the last 4 digit of our pay amount
    // so the maker will know which network we want to send our tokens to.
    // See: https://docs.orbiter.finance/technology ("correct process")
    const network_target =  9000 + to_chain.id
    const final_amount = append_network_target( payAmount, network_target )
    
    const cross_address = resolve_cross_address( swap.evmSigner, swap.starkSigner, from_chain, to_chain )
    
    const txArgs: TxTransferArgs = {
        evmSigner: swap.evmSigner,
        starkSigner: swap.starkSigner,
        token: from_token,
        amount: final_amount, 
        fromChain: from_chain,
        toChain: to_chain,
        maker: maker,
        crossAddressExt: cross_address,
        network: network
    }

    /*========================================= TX ================================================================================================*/
    console.log(`\nBridging token ${ TICKER[ swap.token ] } from ${ swap.fromChain } to ${ swap.toChain }`)
    console.log(`\tpay amount:     ${ ethers.formatUnits( payAmount, maker.fromPrecision ) } ${ TICKER[ swap.token ]}`)
    console.log(`\treceive amount: ${ ethers.formatUnits( receiveAmount, maker.toPrecision ) } ${ TICKER[ swap.token ]}`)
    console.log("\nNetwork:          ", network )
    console.log("Withholding fees: ", maker.tradingFee.toString(), "ETH" )
    console.log("Id code:          ", network_target + '')
    log_routes( txArgs )

    if ( from_chain.name === "starknet" )
        await starknet_transfer( txArgs )
    else
        await evm_transfer( txArgs )

    /*=============================================================================================================================================*/
}