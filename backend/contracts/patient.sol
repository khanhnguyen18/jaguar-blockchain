pragma solidity ^0.4.0;

contract Patient {

    enum Status {
        PENDING,
        FINISHED
    }
    
    struct Examination {
        string _name;
        string _result;
        uint32 _cost;
        Status _status;
    }
    
    string _address;
    string _name;
    Examination[] _examinations;
    
    address _patientAddress;
    Patient _patient;
    
    constructor(string add, string name) public {
        _address = add;
        _name = name;
    }
    
    function createExamination(string name, string result, uint32 cost, Status status) public {
        Examination memory newExamination = Examination({
            _name: name,
            _result: result,
            _cost: cost,
            _status: status
        });
        _examinations.push(newExamination);
    }
}