// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery{
    address payable[] public players;
    mapping(address => bool) public hasbet;
    address  public owner;

    modifier onlyonwer {
        require(msg.sender == owner , 'You are nit the owner');
    _;
    }

    constructor() public  {
      owner == msg.sender;
    }


    function EnterLottery() public  payable {
        require(msg.value > 0.0001 ether, 'Insufficient Fund');
        players.push(payable (msg.sender));
    }

    function getRandomNo() public view returns(uint256){
        return uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, players)));
    }

    function PickWinner() public  onlyonwer{
        uint Num = getRandomNo() * players.length;
        players[Num].transfer(address(this).balance);
        players = new address payable[](0);
    }


}