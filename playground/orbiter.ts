import { Account, Contract, Provider } from "starknet"
import { Wallet, ethers, JsonRpcProvider } from "ethers"
import Orbiter from "../Starknet/Orbiter"
import dotenv from "dotenv"
import { Chains } from "../Starknet/Orbiter/types"


dotenv.config()


const main = async() => {
    
    const { STARKNET_TESTNET_PROVIDER, MAINNET_PROVIDER, TOKENS } = Orbiter.Constant
    
    try {
        // Set up
        
        const evmSigner: Wallet = new ethers.Wallet( process.env.TEST_ETH_PRIVATE_KEY! )
        const starkSigner = new Account( MAINNET_PROVIDER, process.env.TEST_STARK_PUBLIC_KEY!, process.env.TEST_STARK_PRIVATE_KEY! )

        // const TEST_evmSigner: Wallet = new ethers.Wallet( process.env.TEST_ETH_PRIVATE_KEY! )
        // const TEST_starkSigner = new Account( MAINNET_PROVIDER, process.env.TEST_STARK_PUBLIC_KEY!, process.env.TEST_STARK_PRIVATE_KEY! )
        // console.log("evm account:   ", TEST_evmSigner.address)
        // console.log("stark account: ", TEST_starkSigner.address)

        
        const fromChain: Chains = "arbitrum"
        const toChain: Chains = "polygon"
        const network: 'TESTNET' | 'MAINNET' = "MAINNET"

        console.log("evm wallet: ", evmSigner.address)
        console.log("starknet wallet: ", starkSigner.address)

        const provider = new JsonRpcProvider( "https://arbitrum.llamarpc.com" )
        evmSigner.connect( provider )

        const eth_balance = await provider.getBalance( evmSigner.address )
        console.log(" balance arbitrum: ", ethers.formatEther( eth_balance ))


        // await Orbiter.swap({
        //     evmSigner,
        //     starkSigner,
        //     token: TOKENS[ network ][ fromChain ].eth,
        //     fromChain: fromChain,
        //     toChain: toChain,
        //     amount: "0.008",
        //     network
        // })

        // await Orbiter.swap({
        //     evmSigner,
        //     starkSigner,
        //     token: TOKENS[ network ][ fromChain ].eth,
        //     fromChain: fromChain,
        //     toChain: toChain,
        //     amount: "0.005",
        //     network
        // })

        // await Orbiter.swap({
        //     evmSigner,
        //     starkSigner,
        //     token: TOKENS[ network ][ fromChain ].eth,
        //     fromChain: fromChain,
        //     toChain: toChain,
        //     amount: "0.01",
        //     network
        // })

    } catch (error: any) {
  
        console.log(error)
  
    }
}
  
main()