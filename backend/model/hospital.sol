pragma solidity ^0.4.0;
import "./patient.sol";

contract Hospital {
    
    event PatientCreated(address patientAddress);
    event ExaminationCreated(address examinationAddress);
    
    address[] patients;
    
    function createPatient(string _address, string _name) public {
        Patient newPatient = new Patient(_address, _name);
        patients.push(newPatient);
        emit PatientCreated(newPatient);
    }
    
    function createExamination() public {
        
    }
}