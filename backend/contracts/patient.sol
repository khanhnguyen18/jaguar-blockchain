pragma solidity ^0.4.0;
import "./examination.sol";

contract Patient {

    event ExaminationCreated(address examination);
    
    string _address;
    string _name;
    address[] _examinations;
    
    constructor(string add, string name) public {
        _address = add;
        _name = name;
    }
    
    function createExamination(string name, string result, uint32 cost, Examination.Status status) public {
        Examination newExamination = new Examination(name, result, cost, status);
        _examinations.push(newExamination);
        
        emit ExaminationCreated(newExamination);
    }
    
    function getExaminations() public view returns(address[]) {
        return _examinations;
    }
}