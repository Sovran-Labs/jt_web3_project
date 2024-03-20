export default [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "addAmount",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "acquireAmount",
          "type": "uint128"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "point",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "claimSold",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "claimEarn",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "sellXEarnY",
          "type": "bool"
        }
      ],
      "name": "AddLimitOrder",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "leftPoint",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "rightPoint",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "liquidity",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "point",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "collectDec",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "collectEarn",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "sellXEarnY",
          "type": "bool"
        }
      ],
      "name": "CollectLimitOrder",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "leftPoint",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "rightPoint",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        }
      ],
      "name": "CollectLiquidity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "decreaseAmount",
          "type": "uint128"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "point",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "claimSold",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "claimEarn",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "sellXEarnY",
          "type": "bool"
        }
      ],
      "name": "DecLimitOrder",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "paidX",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "paidY",
          "type": "uint256"
        }
      ],
      "name": "Flash",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "leftPoint",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "rightPoint",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "liquidity",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenX",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenY",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "sellXEarnY",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "int24",
          "name": "currentPoint",
          "type": "int24"
        }
      ],
      "name": "Swap",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "point",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "amountX",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "addLimOrderWithX",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "orderX",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "acquireY",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "point",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "amountY",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "addLimOrderWithY",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "orderY",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "acquireX",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "point",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "assignX",
          "type": "uint128"
        },
        {
          "internalType": "bool",
          "name": "fromLegacy",
          "type": "bool"
        }
      ],
      "name": "assignLimOrderEarnX",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "actualAssignX",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "point",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "assignY",
          "type": "uint128"
        },
        {
          "internalType": "bool",
          "name": "fromLegacy",
          "type": "bool"
        }
      ],
      "name": "assignLimOrderEarnY",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "actualAssignY",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "leftPt",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "rightPt",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "liquidDelta",
          "type": "uint128"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "leftPt",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "rightPt",
          "type": "int24"
        },
        {
          "internalType": "uint256",
          "name": "amountXLim",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountYLim",
          "type": "uint256"
        }
      ],
      "name": "collect",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "actualAmountX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "actualAmountY",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "collectFeeCharged",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "point",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "collectDec",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "collectEarn",
          "type": "uint128"
        },
        {
          "internalType": "bool",
          "name": "isEarnY",
          "type": "bool"
        }
      ],
      "name": "collectLimOrder",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "actualCollectDec",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "actualCollectEarn",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "point",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "deltaX",
          "type": "uint128"
        }
      ],
      "name": "decLimOrderWithX",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "actualDeltaX",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "legacyAccEarn",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "point",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "deltaY",
          "type": "uint128"
        }
      ],
      "name": "decLimOrderWithY",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "actualDeltaY",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "legacyAccEarn",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "newNextQueueLen",
          "type": "uint16"
        }
      ],
      "name": "expandObservationQueue",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "inputs": [],
      "name": "fee",
      "outputs": [
        {
          "internalType": "uint24",
          "name": "",
          "type": "uint24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeChargePercent",
      "outputs": [
        {
          "internalType": "uint24",
          "name": "",
          "type": "uint24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeScaleX_128",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeScaleY_128",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "flash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "leftMostPt",
      "outputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "name": "limitOrderData",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "sellingX",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "earnY",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "accEarnY",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "legacyAccEarnY",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "legacyEarnY",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "sellingY",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "earnX",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "legacyEarnX",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "accEarnX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "legacyAccEarnX",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "leftPoint",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "rightPoint",
          "type": "int24"
        }
      ],
      "name": "limitOrderSnapshot",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "sellingX",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "earnY",
              "type": "uint128"
            },
            {
              "internalType": "uint256",
              "name": "accEarnY",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "sellingY",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "earnX",
              "type": "uint128"
            },
            {
              "internalType": "uint256",
              "name": "accEarnX",
              "type": "uint256"
            }
          ],
          "internalType": "struct IiZiSwapPool.LimitOrderStruct[]",
          "name": "limitOrders",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "liquidity",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "liquidity",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "lastFeeScaleX_128",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastFeeScaleY_128",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenOwedX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenOwedY",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "leftPoint",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "rightPoint",
          "type": "int24"
        }
      ],
      "name": "liquiditySnapshot",
      "outputs": [
        {
          "internalType": "int128[]",
          "name": "deltaLiquidities",
          "type": "int128[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxLiquidPt",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "leftPt",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "rightPt",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "liquidDelta",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint24",
          "name": "newFeeChargePercent",
          "type": "uint24"
        }
      ],
      "name": "modifyFeeChargePercent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "observations",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "timestamp",
          "type": "uint32"
        },
        {
          "internalType": "int56",
          "name": "accPoint",
          "type": "int56"
        },
        {
          "internalType": "bool",
          "name": "init",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32[]",
          "name": "secondsAgos",
          "type": "uint32[]"
        }
      ],
      "name": "observe",
      "outputs": [
        {
          "internalType": "int56[]",
          "name": "accPoints",
          "type": "int56[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "name": "orderOrEndpoint",
      "outputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int16",
          "name": "",
          "type": "int16"
        }
      ],
      "name": "pointBitmap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pointDelta",
      "outputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "name": "points",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "liquidSum",
          "type": "uint128"
        },
        {
          "internalType": "int128",
          "name": "liquidDelta",
          "type": "int128"
        },
        {
          "internalType": "uint256",
          "name": "accFeeXOut_128",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "accFeeYOut_128",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isEndpt",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rightMostPt",
      "outputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sqrtRate_96",
      "outputs": [
        {
          "internalType": "uint160",
          "name": "",
          "type": "uint160"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "state",
      "outputs": [
        {
          "internalType": "uint160",
          "name": "sqrtPrice_96",
          "type": "uint160"
        },
        {
          "internalType": "int24",
          "name": "currentPoint",
          "type": "int24"
        },
        {
          "internalType": "uint16",
          "name": "observationCurrentIndex",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "observationQueueLen",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "observationNextQueueLen",
          "type": "uint16"
        },
        {
          "internalType": "bool",
          "name": "locked",
          "type": "bool"
        },
        {
          "internalType": "uint128",
          "name": "liquidity",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "liquidityX",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
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
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "swapX2Y",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
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
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
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
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
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
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
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
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
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
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "swapY2XDesireX",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountY",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenX",
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
      "name": "tokenY",
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
      "name": "totalFeeXCharged",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalFeeYCharged",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "userEarnX",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lastAccEarn",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "sellingRemain",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "sellingDec",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "earn",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "legacyEarn",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "earnAssign",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "userEarnY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lastAccEarn",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "sellingRemain",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "sellingDec",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "earn",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "legacyEarn",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "earnAssign",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
]