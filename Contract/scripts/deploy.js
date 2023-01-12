// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.


async function deployContract() {
  const lottery = await ethers.getContractFactory("Lottery")
  lotteryContract = await lottery.deploy();
  await lotteryContract.deployed();
  // console.log(lotteryContract.address)
  console.log("This is the Lottery Contract Address:" ,lotteryContract.address)
}

deployContract();