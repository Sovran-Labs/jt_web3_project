export default [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_factory",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_weth",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "WETH9",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes[]",
          "name": "data",
          "type": "bytes[]"
        }
      ],
      "name": "multicall",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "results",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes[]",
          "name": "data",
          "type": "bytes[]"
        }
      ],
      "name": "multicallNoRevert",
      "outputs": [
        {
          "internalType": "bool[]",
          "name": "successes",
          "type": "bool[]"
        },
        {
          "internalType": "bytes[]",
          "name": "results",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenX",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenY",
          "type": "address"
        },
        {
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        }
      ],
      "name": "pool",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "refundETH",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "path",
          "type": "bytes"
        }
      ],
      "name": "swapAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "acquire",
          "type": "uint256"
        },
        {
          "internalType": "int24[]",
          "name": "pointAfterList",
          "type": "int24[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "desire",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "path",
          "type": "bytes"
        }
      ],
      "name": "swapDesire",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "cost",
          "type": "uint256"
        },
        {
          "internalType": "int24[]",
          "name": "pointAfterList",
          "type": "int24[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenX",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenY",
          "type": "address"
        },
        {
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        },
        {
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        },
        {
          "internalType": "int24",
          "name": "lowPt",
          "type": "int24"
        }
      ],
      "name": "swapX2Y",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        },
        {
          "internalType": "int24",
          "name": "finalPoint",
          "type": "int24"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "x",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "y",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "path",
          "type": "bytes"
        }
      ],
      "name": "swapX2YCallback",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenX",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenY",
          "type": "address"
        },
        {
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        },
        {
          "internalType": "uint128",
          "name": "desireY",
          "type": "uint128"
        },
        {
          "internalType": "int24",
          "name": "lowPt",
          "type": "int24"
        }
      ],
      "name": "swapX2YDesireY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "internalType": "int24",
          "name": "finalPoint",
          "type": "int24"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenX",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenY",
          "type": "address"
        },
        {
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        },
        {
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        },
        {
          "internalType": "int24",
          "name": "highPt",
          "type": "int24"
        }
      ],
      "name": "swapY2X",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "internalType": "int24",
          "name": "finalPoint",
          "type": "int24"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "x",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "y",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "path",
          "type": "bytes"
        }
      ],
      "name": "swapY2XCallback",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenX",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenY",
          "type": "address"
        },
        {
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        },
        {
          "internalType": "uint128",
          "name": "desireX",
          "type": "uint128"
        },
        {
          "internalType": "int24",
          "name": "highPt",
          "type": "int24"
        }
      ],
      "name": "swapY2XDesireX",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        },
        {
          "internalType": "int24",
          "name": "finalPoint",
          "type": "int24"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "minAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "sweepToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "minAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "unwrapWETH9",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
]