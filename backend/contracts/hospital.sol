pragma solidity ^0.4.0;
import "./patient.sol";

contract Hospital {
    
    event PatientCreated(address patientAddress);
    
    string _name;
    address[] patients;
    
    constructor (string name) public {
        _name = name;
    }
    
    function createPatient(string _address, string _name) public {
        Patient newPatient = new Patient(_address, _name);
        patients.push(newPatient);
        
        emit PatientCreated(newPatient);
    }
    
    function getPatients() public view returns(address[]) {
        return patients;
    }
}
