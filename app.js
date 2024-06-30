const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // enter a hardhat address or a metamask address with some ether to transect
const contractABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "voterId",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "place",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "pName",
                "type": "string"
            }
        ],
        "name": "registerVoter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "voterId",
                "type": "address"
            }
        ],
        "name": "checkEligibility",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "voterId",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "newPlace",
                "type": "string"
            }
        ],
        "name": "updatePlace",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

window.addEventListener('load', function() {
    // Check if Web3 has been injected by the browser (MetaMask)
    if (typeof web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!');
        window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    // Create the contract instance
    window.contract = new web3.eth.Contract(contractABI, contractAddress);
});

async function registerVoter() {
    const accounts = await web3.eth.getAccounts();
    const voterAddress = document.getElementById('voterAddress').value;
    const voterName = document.getElementById('voterName').value;
    const voterAge = document.getElementById('voterAge').value;
    const voterPlace = document.getElementById('voterPlace').value;
    const voterPName = document.getElementById('voterPName').value;

    window.contract.methods.registerVoter(voterAddress, voterName, voterAge, voterPlace, voterPName).send({ from: accounts[0] });
}

async function checkEligibility() {
    const voterAddress = document.getElementById('checkAddress').value;
    const result = await window.contract.methods.checkEligibility(voterAddress).call();
    document.getElementById('eligibilityResult').innerText = result[0] + ' Age: ' + result[1];
}

async function updatePlace() {
    const accounts = await web3.eth.getAccounts();
    const voterAddress = document.getElementById('updateAddress').value;
    const newPlace = document.getElementById('newPlace').value;

    window.contract.methods.updatePlace(voterAddress, newPlace).send({ from: accounts[0] });
}
