const contractAddress = '0x08EeFe239c5D052A3a643AA715BAfd7E7DeF93f5'; // Replace with your actual contract address
const contractABI =  [
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

let contract;
let userAccount;

window.addEventListener('load', async function() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            window.web3 = new Web3(window.ethereum);
        } catch (error) {
            console.error("User denied account access")
            updateStatus('Please connect to MetaMask to use this dApp.');
            return;
        }
    } else {
        console.log('No web3? You should consider trying MetaMask!');
        updateStatus('Please install MetaMask to use this dApp.');
        return;
    }

    // Create the contract instance
    contract = new web3.eth.Contract(contractABI, contractAddress);

    // Get the user's account
    const accounts = await web3.eth.getAccounts();
    userAccount = accounts[0];

    updateStatus('Connected to MetaMask. Ready to use the dApp.');

    // Check if we're on the correct network
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = 5; // Replace with your network ID (e.g., 1 for mainnet, 5 for Goerli)
    if (networkId !== deployedNetwork) {
        updateStatus(`Please switch to the correct network. Expected network ID: ${deployedNetwork}`);
        return;
    }
});

async function registerVoter() {
    updateStatus('Registering voter...');
    const voterAddress = document.getElementById('voterAddress').value;
    const voterName = document.getElementById('voterName').value;
    const voterAge = document.getElementById('voterAge').value;
    const voterPlace = document.getElementById('voterPlace').value;
    const voterPName = document.getElementById('voterPName').value;

    try {
        await contract.methods.registerVoter(voterAddress, voterName, voterAge, voterPlace, voterPName).send({ from: userAccount });
        updateStatus('Voter registered successfully!');
    } catch (error) {
        console.error('Error registering voter:', error);
        updateStatus('Error registering voter. See console for details.');
    }
}

async function checkEligibility() {
    updateStatus('Checking eligibility...');
    const voterAddress = document.getElementById('checkAddress').value;
    try {
        const result = await contract.methods.checkEligibility(voterAddress).call();
        document.getElementById('eligibilityResult').innerText = `${result[0]} Age: ${result[1]}`;
        updateStatus('Eligibility checked successfully.');
    } catch (error) {
        console.error('Error checking eligibility:', error);
        updateStatus('Error checking eligibility. See console for details.');
    }
}

async function updatePlace() {
    updateStatus('Updating place...');
    const voterAddress = document.getElementById('updateAddress').value;
    const newPlace = document.getElementById('newPlace').value;

    try {
        await contract.methods.updatePlace(voterAddress, newPlace).send({ from: userAccount });
        updateStatus('Place updated successfully!');
    } catch (error) {
        console.error('Error updating place:', error);
        updateStatus('Error updating place. See console for details.');
    }
}

function updateStatus(message) {
    const statusElement = document.getElementById('status');
    statusElement.innerText = message;
}
