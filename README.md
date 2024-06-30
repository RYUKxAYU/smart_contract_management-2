# Voter Registration DApp

This is a decentralized application (DApp) for voter registration, built using Solidity for the Ethereum blockchain and a frontend with HTML and JavaScript. It allows users to register voters, check their eligibility, and update their place of residence.

## Features

- **Register Voters**: Users can register with their address, name, age, place, and party name.
- **Check Eligibility**: Users can check if a voter is eligible to vote based on age.
- **Update Place**: Users can update the place of residence for a voter.

## Technologies Used

- **Solidity**: Smart contract language for Ethereum.
- **Remix**: IDE for writing and deploying Solidity contracts.
- **Web3.js**: JavaScript library for interacting with the Ethereum blockchain.
- **MetaMask**: Browser extension for Ethereum wallet management.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/voter-registration-dapp.git
   cd voter-registration-dapp
# Voter Registration DApp

This is a decentralized application (DApp) for voter registration, built using Solidity for the Ethereum blockchain. It allows users to register voters, check their eligibility, and update their place of residence.

## Features

- Register voters with address, name, age, place, and party name.
- Check voter eligibility based on age.
- Update voter's place of residence.

## Technologies Used

- Solidity
- Remix IDE
- Web3.js
- MetaMask

## Installation and Setup

### Deploy the Smart Contract

1. **Open Remix**: Go to [Remix](https://remix.ethereum.org/).
2. **Create a New File**: Create a new file (`Voter.sol`) and paste the Solidity contract code.
3. **Compile the Contract**: Use the Solidity compiler.
4. **Deploy the Contract**:
   - Use `Injected Web3` for deployment.
   - Ensure MetaMask is connected to a test network.
5. **Copy the Contract Address**: After deployment, copy the contract address.

### Setup the Frontend

1. **Replace Contract Address**: In `app.js`, replace `YOUR_CONTRACT_ADDRESS` with the contract address from Remix.
2. **Save Files**: Save `index.html` and `app.js` in the same directory.

### Run the DApp

1. **Open the HTML File**: Open `index.html` in a browser with MetaMask installed.
2. **Interact with the DApp**: Register voters, check eligibility, and update places.

## Usage

1. **Register a Voter**: Fill in the details and click "Register".
2. **Check Eligibility**: Enter a voter's address and click "Check Eligibility".
3. **Update Place**: Enter a voter's address and the new place, then click "Update Place".

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Ethereum](https://ethereum.org/)
- [Remix IDE](https://remix.ethereum.org/)
- [Web3.js](https://web3js.readthedocs.io/)
- [MetaMask](https://metamask.io/)

## Author

Ayush Yadav\
[@LinkedIn_Ayush](https://www.linkedin.com/in/ayush-yadav-162aa024a/)
