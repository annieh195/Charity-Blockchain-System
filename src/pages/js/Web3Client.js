import Web3 from 'web3';

let web3;

const initWeb3 = async () => {
  // Check for Ethereum provider
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error("User denied account access", error);
    }
  } 
  // Legacy dapp browsers...
  else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
  } 
  // If no injected web3 instance is detected, fall back to Infura
  else {
    console.error("No web3 provider detected, falling back to Infura");
    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY'));
  }
};

// Create a new fund
const createNewFund = async (charityName, description, fundsRequired, contractABI, contractAddress) => {
  try {
    if (!web3) {
      throw new Error("Web3 is not initialized");
    }

    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      throw new Error("No account is available");
    }

    const contract = new web3.eth.Contract(contractABI, contractAddress);
    await contract.methods.createFund(charityName, description, fundsRequired).send({
      from: accounts[0],
    });

    console.log('Fund created successfully');
  } catch (error) {
    console.error('Error creating fund:', error);
  }
};

export { initWeb3, createNewFund };
