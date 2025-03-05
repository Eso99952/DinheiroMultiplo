// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DinheiroMultiplo {
    address public owner;
    mapping(address => uint256) public balances;
    mapping(address => uint256) public investments;

    constructor() {
        owner = msg.sender;
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Saldo insuficiente");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    function investInCrypto(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Saldo insuficiente para investir");
        balances[msg.sender] -= amount;
        investments[msg.sender] += amount;
    }

    function checkBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    function checkInvestment() public view returns (uint256) {
        return investments[msg.sender];
    }
}


