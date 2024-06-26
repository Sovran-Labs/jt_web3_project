import { is_native } from "../utils";
import { SwapTx } from "../../types";
import { TradeType } from "@uniswap/sdk-core";
import { swapExactTokensForTokens, swapTokensForExactTokens } from "./swapTokens";
import { swapExactETHForTokens, swapETHForExactTokens, swapExactTokensForETH, swapTokensForExactETH } from "./swapETH";


export const exec_swap = async( swapTx: SwapTx ): Promise<void> => {

    const { path, tradeType } = swapTx.trade
    const { EXACT_INPUT, EXACT_OUTPUT } = TradeType

    try {

        if ( is_native( path[0] ) && tradeType === EXACT_INPUT )  return await swapExactETHForTokens( swapTx )
        if ( is_native( path[0] ) && tradeType === EXACT_OUTPUT ) return await swapETHForExactTokens( swapTx )
        if ( is_native( path[1] ) && tradeType === EXACT_INPUT )  return await swapExactTokensForETH( swapTx )
        if ( is_native( path[1] ) && tradeType === EXACT_OUTPUT ) return await swapTokensForExactETH( swapTx )
        if ( tradeType === EXACT_INPUT )                          return await swapExactTokensForTokens( swapTx )
        if ( tradeType === EXACT_OUTPUT )                         return await swapTokensForExactTokens( swapTx )
        
    } catch (error) {

       throw( error )

    }
}