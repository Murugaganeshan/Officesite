let environment = "local";
let config = null;

if (environment === "local") {
    config = {
        BACKEND_URL:"http://localhost:3002/"
    };  
    
} else if (environment === "demo") {
    config = {
        ETH_RPC_URL: "https://mainnet.infura.io/v3/0fb00006e6b749c2b39c1f8594b8b243",
        POLYGON_RPC_URL:"https://polygon-rpc.com/",
        Eth_chain_ID:1,
        Polygon_CHAIN_ID: 137,
        BACKEND_URL: "http://18.194.228.158:3000/",
        SYMBOL: "BNB",
        BLOCKEXPLORER: "https://bscscan.com/",
        EthUsdtcontract: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        polygonUsdtContract: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        Polygonwrappedsnapit: "0x2D12054Fe9735dA5C85EC994BEb7C8eaD6E5cB00",
        ethwrappedsnapit:"0xF532E8298D9b5021cb762EDe236493BE8Fff30B4",
        Adminaddress:"0xa11a26Ad6C254fF869a1A82a88D88875a1538897",
        Eth_Blockexplorer:"https://etherscan.io",
        POLYGON_Blockexplorer:"https://polygonscan.com/"
    };
}

export default config;