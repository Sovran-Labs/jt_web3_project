import { Contract, Wallet } from "ethers"
import { Pool, Token } from "."


export type AddOptions = {
    percent?: number
    max?: boolean
    slipage?: number
    deadline?: number
}

export type AddLiquidityETH = {
    token: string
    amountTokenDesired: bigint
    amountTokenMin: bigint
    amountETHMin: bigint
    to: string
    deadline: number
}

export type AddLiquidity = {
    tokenA: string
    tokenB: string
    amountADesired: bigint
    amountBDesired: bigint
    amountAMin: bigint
    amountBMin: bigint
    to: string
    deadline: number
}

export type AddLiquidityTx = {
    signer: Wallet
    pool: Pool
    tokenX: Token
    tokenY: Token
    amountXDesired: bigint
    amountYDesired: bigint
    amountXMin: bigint
    amountYMin: bigint
    to: string
    deadline: number
    Router: Contract
}