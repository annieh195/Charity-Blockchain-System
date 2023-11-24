
import Web3 from 'web3';
let web3;

const initWeb3 = async () => {
  if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
    } catch (error) {
      console.error("User denied account access");
    }
  } 
  else if (typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
  } 
  else {
    console.error("No web3 provider detected");
  }
};

// Create a new fund
const createNewFund = async (charityName, description, fundsRequired) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(/* Your contract ABI here */ /* Your contract address here */);

    await contract.methods.createFund(charityName, description, fundsRequired).send({
      from: accounts[0],
    });

    console.log('Fund created successfully');
  } catch (error) {
    console.error('Error creating fund:', error);
  }
};

export { initWeb3, createNewFund };
