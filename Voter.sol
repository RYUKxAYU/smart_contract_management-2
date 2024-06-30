// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Voter {

    struct VID {
        string name;
        uint256 age;
        string place;
        string pName;
    }

    mapping(address => VID) public vid;

    // Function to register a new voter
    function registerVoter(address voterId, string memory name, uint256 age, string memory place, string memory pName) public {
        vid[voterId] = VID(name, age, place, pName);
    }

    // Function to check voter eligibility
    function checkEligibility(address voterId) public view returns (string memory, uint256) {
        VID memory voter = vid[voterId];
        if (voter.age >= 18) {
            return ("Valid", voter.age);
        }
        return ("Can't vote, underaged", voter.age);
    }

    // Function to update voter's place
    function updatePlace(address voterId, string memory newPlace) public {
        VID storage voter = vid[voterId];
        voter.place = newPlace;
    }
}
