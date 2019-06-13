# Blockchain and IOT towards traceability and transparency in supply-chains
> Final year college project

In the current working scenario, manufacturers producing perishable products like medicines face huge losses due to non-adherence to standards along the supply-chain. Irrespective of whose fault it is the cost has to be beared by the producer. We intend to use blockchain to continuously monitor status and bring trust into the supply-chain. Each transaction and hand-over is implemented via smart contracts.

## INSTALLATION

### web3.js

Node:

```npm install web3```

Yarn

```yarn install web3```

Meteor

```meteor npm install --save web3@1.x```

### Creating instance in Google CLoud

https://cloud.google.com/sql/docs/mysql/create-instance

### Installing ethereum in Local system

#### Install on macOS

Install Homebrew and make sure it's up to date.
```
brew update
brew upgrade
 ```
 Then following command
 ```
brew tap ethereum/ethereum
brew install ethereum

 ```

 #### Install on Windows

 Download the latest stable binary,extract it
 ```
chdir <path to extracted binary>
open geth.exe

 ```

 ### Install on Linux
 On Ubuntu, execute these commands
  ```
  sudo apt-get install software-properties-common
  sudo add-apt-repository -y ppa:ethereum/ethereum
  sudo apt-get update
  sudo apt-get install ethereum

   ```

 


 


## Commands

```
npm run clean // removes all the node_modules folders in all modules
npm run bootstrap // install all dependencies and symlinks the internal modules for all modules
npm run test // runs all tests
npm run build // runs rollup
npm run dev // runs rollup with a watcher
```

## Contributing

1. Fork it (<https://github.com/aashan007/secretWeapon.git co>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


### Prerequisite

1. Node.js
2. IPFS
3. Truffle Framework (`npm install -g truffle` or on linux `sudo npm install -g truffle`)
4. Testrpc (`npm install -g ethereumjs-testrpc` or on linux `sudo npm install -g ethereumjs-testrpc`)

### Part 1

1. `git clone https://github.com/aashan007/secretWeapon.git`
2. `cd supply-chain`
3. `npm install`
4. `npm install -g @angular/cli@latest`
(linux users might have to do: `sudo npm install -g @angular/cli@latest`)

### Part 2

4. Open a new terminal and start IPFS daemon with `ipfs daemon`
6. Start testrpc in new terminal with `testrpc -l 47000000000000`.
7. From inside the project directory run `truffle compile` to compile your contracts
8. And `truffle migrate` to deploy those contracts to the network
9. Now finally, start the project with `npm start`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
10. Make sure there are no errors in browser console

### Login

1. This project uses your keystore file to login to the application.
2. For now, the accounts that can login are hardcoded in `auth.service.ts` with there role. Future builds will feature a screen for proper role and account management.
3. You can find the keystore for default accounts and there password in 'keys' folder.

### URLs

1. `/login`
2. `/retailer`
3. `/distributor`
4. `/manufacturer`
5. `/supplier`

### Todo:

1. Access IPFS from browser (Remove separate script for IPFS upload).

## Technologies & Languages Used:
1. Angular4 (Typescript/Javascript)
2. Truffle (Solidity)
3. IPFS
4. Node.js
5. Express

