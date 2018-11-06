pragma solidity ^0.4.0;
import "./hospital.sol";

contract HospitalFactory {

    event HospitalCreated(address hospitalAddress);
    
    address[] deployedHospitals;
    
    function createHospital(string name) public {
        Hospital newHospital = new Hospital(name);
        deployedHospitals.push(newHospital);
        
        emit HospitalCreated(newHospital);
    }
    
    function getDeployedHospitals() public view returns(address[]){
        return deployedHospitals;
    }
}