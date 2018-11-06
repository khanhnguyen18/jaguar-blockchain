pragma solidity ^0.4.0;
import "./patient.sol";

contract Hospital {
    
    event PatientCreated(Patient patient);
    
    string _name;
    Patient[] patients;
    
    constructor (string name) public {
        _name = name;
    }
    
    function createPatient(string add, string name) public {
        Patient newPatient = new Patient(add, name);
        patients.push(newPatient);
        
        emit PatientCreated(newPatient);
    }
    
    function getPatients() public view returns(Patient[]) {
        return patients;
    }
}