pragma solidity ^0.4.0;

contract PatientHistory {

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
    
    struct Hopital {
        string _name;
        Examination[] _examinations;
    }
    
    struct Patient {
        string _address;
        string _name;
        Examination[] _examinations;
    }
    
    address patientAddress;
    Patient patient;
}