import { is_native } from "../utils";
import { ApproveTx } from "../../types/";
import { ethers, Wallet, Contract } from "ethers";
import { ERC20_ABI, ROUTER_ADDRESS } from "../../config/constants";

export const get_approve_tx = async(
    signer: Wallet, 
    amount: string, 
    tokenAddress: string, 
    network: 'TESTNET' | 'MAINNET'
): Promise<ApproveTx | undefined> => {

    try {

        if ( is_native( tokenAddress ) ) 
            return undefined
    

        const router_address = ROUTER_ADDRESS[ network ]
        const erc20 = new Contract( tokenAddress, ERC20_ABI, signer );

        const decimals = await erc20.decimals()
        const big_amount = ethers.parseUnits( amount, decimals )
    
        return { Erc20: erc20, spender: router_address, amount: big_amount, decimals: decimals, network: network }

    } catch (error: any) {
        
        throw error

    }

}