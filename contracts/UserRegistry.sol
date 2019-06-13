pragma solidity >=0.4.22 <0.6.0;

contract UserRegistry {
  address public owner = msg.sender;

  mapping(bytes32=>bytes32) registry;

modifier onlyBy(address _account)
    {
        require(
          msg.sender == _account,
           "Sender not authorized."
           );
        _;
    }

  function setRole(bytes32 addr, bytes32 role) public onlyBy(owner) {
    registry[addr] = role;
  }

  function getRole(bytes32 addr) public view returns(bytes32) {
    return registry[addr];
  }
}
