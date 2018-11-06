pragma solidity ^0.4.0;
import "./examination.sol";

contract Examination {
    
    enum Status {
        PENDING,
        FINISHED
    }
    
    string _name;
    string _result;
    uint32 _cost;
    Status _status;
    
    constructor(string name, string result, uint32 cost, Status status) public {
        _name = name;
        _result = result;
        _cost = cost;
        _status = status;
    }
}