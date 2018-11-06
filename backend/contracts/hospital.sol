pragma solidity ^0.4.0;
import "./patient.sol";

contract Hospital {
    
    event PatientCreated(Patient patient);
    
    string _name;
    Patient[] patients;
    
    constructor (string name) public {
        _name = name;
    }
    
    function createPatient(string _address, string _name) public {
        Patient newPatient = new Patient(_address, _name);
        patients.push(newPatient);
        
        emit PatientCreated(newPatient);
    }
    
    function getPatients() public view returns(Patient[]) {
        return patients;
    }
}