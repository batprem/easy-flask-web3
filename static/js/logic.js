//initializing Moralis
// Moralis.initialize("ghmB7Q7uXawYBenhygG5TT061nX4PJC5fUFO8A6B"); // Application id from moralis.io
// Moralis.serverURL = "https://8jns6z46n2g1.usemoralis.com:2053/server"; //Server url from moralis.io


window.web3 = new Web3(window.ethereum);

const SampleStorageAbi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_favoriteNumber",
                "type": "uint256"
            }
        ],
        "name": "addPerson",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "favoriteNumber",
        "outputs": [
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
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "nameToFavoriteNumber",
        "outputs": [
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
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "people",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "favoriteNumber",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "person",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "favoriteNumber",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "retrieve",
        "outputs": [
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
        "inputs": [],
        "name": "retrieve_plus_1",
        "outputs": [
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
                "internalType": "uint256",
                "name": "_favoriteNumber",
                "type": "uint256"
            }
        ],
        "name": "store",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const SampleStorage = new window.web3.eth.Contract(SampleStorageAbi, '0x7fC0Cf47008b31ad817435393FFB395678972726')
//dApp frontend logic
async function retrieve() {
    // SampleStorage.methods.get_game_balance(document.getElementById('gameid').value).call().then(balance_populate);
    SampleStorage.methods.retrieve().call().then(fillBlank);
}

async function store() {
    const value = document.getElementById("storeNumber").value;
    // SampleStorage.methods.store(value).send({ from: await web3.eth.currentProvider.selectedAddress, value: 0.001e18 })
    await SampleStorage.methods.store(value).send({ from: await web3.eth.currentProvider.selectedAddress });
}
// SampleStorage.methods.store(18).send({from: accounts[0]})

function fillBlank(_value) {
    document.getElementById("retrieveData").setAttribute("value", _value);
}
// function balance_populate(_value) {
//     const amount = _value / (10 ** 18);
//     document.getElementById("gamebalance").setAttribute("value", a);
// }

async function login() {
    ethereum.enable() // Activate Metamask
    document.getElementById("storeNumber").removeAttribute("disabled");
    document.getElementById("retrieveData").removeAttribute("disabled");
    document.getElementById("storeButton").removeAttribute("disabled");
    document.getElementById("retrieveButton").removeAttribute("disabled");
}