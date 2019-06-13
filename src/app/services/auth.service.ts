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
      this.AuthContract.setRole('0xb3a2a6f92fc6af6445109f342ca3bb65922e4270', 'dist');
      this.AuthContract.setRole('0xa09c42dbc059b6409ed16f696cd2ec04c2505a47', 'mfg');
      this.AuthContract.setRole('0x0145cb1d2986ab824dfce4562cea2fe197bd06ba', 'supplier');
      this.AuthContract.setRole('0x01ff4a4c2bbf6ce37d5c553f2bc8ddfdafb5de38', 'retail');
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
    if(password == 'distributor'){
      role = 'dist';
    }

    if(password == 'manufacturer'){
      role = 'mfg';
    }

    if(password == 'supplier'){
      role = 'supplier';
    }

    if(password == 'retailer'){
      role = 'retail';
    }
    
    return role;
  }

}
