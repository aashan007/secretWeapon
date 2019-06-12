import { Injectable } from '@angular/core';
const Web3 = require('web3');
const contract = require('truffle-contract');
const userartifact = require('../../../build/contracts/UserRegistry.json');

declare var Wallet: any;

@Injectable()
export class AuthService {
  wallet: any;
  web3: any;
  UserRegistry: any;
  AuthContract: any;
  constructor() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider('http://localhost:8545'));

    this.UserRegistry = contract(userartifact);
    this.UserRegistry.setProvider(this.web3.currentProvider);
    this.UserRegistry.defaults({from: this.web3.eth.coinbase});
    this.UserRegistry.deployed().then(instance => {
      this.AuthContract = instance;
      this.AuthContract.setRole('0xae73b8caced64ef6defc5f5377c9d95259fee3cc', 'dist');
      this.AuthContract.setRole('0xdb30a2e319714d53d933abef01a63bf8f3e2ac327d0b745de5003e64f358243d', 'mfg');
      this.AuthContract.setRole('0x5deb4cf9de0eead980a8cd823a3b3f78c28adc68e28c12a4ecfd9cc3c9328a5a', 'supplier');
      this.AuthContract.setRole('0xeca01f292e28493adddf2b1a553931d1e54414c5df05e5280751a91e93780907', 'retail');
    });
  }

  checkCredential(keystore: string, password: string) {
    let role: any;
    // try {
    //   this.wallet = Wallet.getWalletFromPrivKeyFile(keystore, password);
    //   console.log("Chandran thall")
    //   const address = this.wallet.getAddressString();
    //   console.log(address);
    //   console.log("Chandran thall-2")
    //     role = this.AuthContract.getRole(address).then(function(result){
    //       return result;
    //     }).catch(function(e){
    //       console.log(e);
    //     });
    // }catch (e) {
    //   role = 'not found';
    // }
    // console.log("Chandran thall-3")
    // console.log(role);
    role = 'dist';
    return role;
  }

}
