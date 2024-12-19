require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const API_KEY = process.env.ALCHEMY_API_KEY || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      //forking: {
        // url: "https://eth-mainnet.g.alchemy.com/v2/VnT81te988jkDbQnKy8rPAVwdsYY0uVu",
      chainId: 31337
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`,
      accounts: PRIVATE_KEY !== "" ? [PRIVATE_KEY] : [],
      chainId: 1,
      saveDeployments: true,
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${API_KEY}`,
      accounts: PRIVATE_KEY !== "" ? [PRIVATE_KEY] : [],
      saveDeployments: true,
    },
  },
  solidity: "0.8.28",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
  mocha: { 
    timeout: 500000
  },
};
