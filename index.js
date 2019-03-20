
import Web3 from 'web3';

if (typeof web3 !== "undefined") 
{
 web3 = new Web3(web3.currentProvider);
 } 
else 
{
 // set the provider you want from Web3.providers

 web3 = require(web3);  //new Web3(Web3.givenProvider || 'ws://localhost:8545');

//web3 = new Web3(new Web3.providers.HttpProvider(“http://localhost:8545”));
}


web3.eth.defaultAccount = web3.eth.accounts[0];


var CoursesContract = web3.eth.contract([
{
    "constant": false,
    "inputs": [
        {
            "name": "_fName",
            "type": "string"
        },
        {
            "name": "_age",
            "type": "uint256"
        }
    ],
    "name": "setInstructor",
    "outputs": [],
    "payable": false,
    "type": "function",
    "stateMutability": "nonpayable"
},
{
    "constant": true,
    "inputs": [],
    "name": "getInstructor",
    "outputs": [
        {
            "name": "",
            "type": "string"
        },
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "type": "function",
    "stateMutability": "view"
}
]);

var Courses = CoursesContract.at('0x92db24fa0d8ae598910b70fb3ab12aa347abc7bd');