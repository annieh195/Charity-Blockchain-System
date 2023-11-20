import Web3 from 'web3';

let web3;
let selectedAccount;
let contract;

const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "fundIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "donor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "DonationReceived",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "fundIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "goalAmount",
            "type": "uint256"
          }
        ],
        "name": "FundCreated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "fundIndex",
            "type": "uint256"
          }
        ],
        "name": "GoalAchieved",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "fundDonors",
        "outputs": [
          {
            "internalType": "address",
            "name": "donorAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "funds",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "address payable",
            "name": "manager",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "goalAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalDonated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "donorCount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isGoalAchieved",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_goalAmount",
            "type": "uint256"
          }
        ],
        "name": "createFund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "fundIndex",
            "type": "uint256"
          }
        ],
        "name": "donate",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [],
        "name": "getFunds",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "address payable",
                "name": "manager",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "goalAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totalDonated",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "donorCount",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "isGoalAchieved",
                "type": "bool"
              }
            ],
            "internalType": "struct CharityFund.Fund[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
]; // abi from CharityFund.json file
const contractAddress = '0x8C553DC5157D74800985F88541Ff1Da65630e987'; // address from deployed contract in Ganache

// Initialization and setup
export const initWeb3 = () => {}