require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_PRIVATE_KEY = "60f77f309cc1cdb873cfd8bbf8c61529470aae2c455fc1b3f463de36c97621e2";
const ALCHEMY_API_KEY = "9c4d37d7dd984bb2b652d085e142ddf5";
module.exports = {
  solidity: "0.8.17",

  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/9c4d37d7dd984bb2b652d085e142ddf5`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};




// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
// const GOERLI_PRIVATE_KEY = "YOUR GOERLI PRIVATE KEY";

// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     goerli: {
//       url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
//       accounts: [GOERLI_PRIVATE_KEY]
//     }
//   }
// };