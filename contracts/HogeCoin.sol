pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract HogeCoin is StandardToken {

  string public constant name = "HogeCoin";
  string public constant symbol = "HGC";
  uint8 public constant decimals = 18;

  /**
  * @dev Constructor that gives msg.sender all of existing tokens.
  * @param _initialSupply : initial tokens.
  */
  constructor(uint256 _initialSupply) public {
    totalSupply_ = _initialSupply;
    balances[msg.sender] = _initialSupply;
    emit Transfer(0x0, msg.sender, _initialSupply);
  }
}
