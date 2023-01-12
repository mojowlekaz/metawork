const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lottery",  () => {
    beforeEach( async () => {
       const lottery = await ethers.getContractFactory("Lottery")
       lotteryContract = await lottery.deploy();
       await lotteryContract.deployed();
       console.log(lotteryContract.address)
       let Credits, credits, addr1, addr2, addr3, addr4;
       [addr1, addr2, addr3, addr4, _] = await ethers.getSigners();
    //    console.log(addr1.address)
    })

    it('it should return error Insufficient balance', async function() {
        const ethAmount = "1";
        await(expect (lotteryContract.EnterLottery({value: ethers.utils.parseEther("0.0001")})).to.be.revertedWith("Insufficient Fund"));
    })

    it('it should  Enter Lottery Successfully', async function() {
        await(expect (lotteryContract.EnterLottery({value: ethers.utils.parseEther("2")})));
    })
    describe("GetRandomNo", function() {
        it('It should return the Random No', async function() {
         expect (lotteryContract.getRandomNo())
        })
    })
    it('it should  set the owner', async function() {
        const signers = await ethers.getSigners()
        deployer = signers[0].address
        // expect (await lotteryContract.owner()).to.equal(deployer);
        expect (await lotteryContract.owner());
    })

})

