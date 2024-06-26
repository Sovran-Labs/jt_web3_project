import { Provider, constants } from "starknet"
import erc20_abi from "../abis/erc20"

export const ERC20_ABI = erc20_abi

export const OZ_ACCOUNT_CLASS_HASH = "0x058d97f7d76e78f44905cc30cb65b91ea49a4b908a76703c54197bca90f81773"
export const PROXY_CONTRACT_CLASS_HASHES = [
    "0x25ec026985a3bf9d0cc1fe17326b245dfdc3ff89b8fde106542a3ea56c5a918",
  ]
export const ARGENT_ACCOUNT_CONTRACT_CLASS_HASHES = [
"0x033434ad846cdd5f23eb73ff09fe6fddd568284a0fb7d1be20ee482f044dabe2",
"0x1a7820094feaf82d53f53f214b81292d717e7bb9a92bb2488092cd306f3993f",
"0x3e327de1c40540b98d05cbcb13552008e36f0ec8d61d46956d2f9752c294328",
"0x7e28fb0161d10d1cf7fe1f13e7ca57bce062731a3bd04494dfd2d0412699727",
]

export const ARGENT_ACCOUNT_CONTRACT_CLASS_HASHES__NEW = {
CAIRO_0: [
    "0x033434ad846cdd5f23eb73ff09fe6fddd568284a0fb7d1be20ee482f044dabe2",
    "0x1a7820094feaf82d53f53f214b81292d717e7bb9a92bb2488092cd306f3993f",
    "0x3e327de1c40540b98d05cbcb13552008e36f0ec8d61d46956d2f9752c294328",
    "0x7e28fb0161d10d1cf7fe1f13e7ca57bce062731a3bd04494dfd2d0412699727",
],

CAIRO_1: [
    "0x1a736d6ed154502257f02b1ccdf4d9d1089f80811cd6acad48e6b6a9d1f2003",
],
}


// Tokens
export const TOKENS: { [key: string]: any } = {
    'MAINNET': {
        eth: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
        usdc:'0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8',
        dai:'0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3',
        wbtc:'0x03fe2b97c1fd336e750087d68b9b867997fd64a2661ff3ca5a7c771641e8e7ac',
        usdt:'0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8',
    },
    'TESTNET': {
        eth: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
        dai: '0x03e85bfbb8e2a42b7bead9e88e9a1b19dbccf661471061807292120462396ec9',
        usdc: '0x005a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426', 
        tka: '0x02e2faab2cad8ecdde5e991798673ddcc08983b872304a66e5f99fbb24e14abc',
        tkb: '0x0250a29c8cd4d07a4db0516798fe86225e362439e769c9a0e1640d4a8ec12883',
    }
}

export const TESTNET_PROVIDER = new Provider( { sequencer: { network: constants.NetworkName.SN_GOERLI } }) // for starknet testnet 1
export const MAINNET_PROVIDER = new Provider( { sequencer: { network: constants.NetworkName.SN_MAIN } }) // for starknet mainnet