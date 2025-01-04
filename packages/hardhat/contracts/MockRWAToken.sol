// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// MockRWAToken Contract
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockRWAToken is ERC20 {
    address public admin;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        admin = msg.sender;
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == admin, "Only admin can mint");
        _mint(to, amount);
    }
}

//dcs