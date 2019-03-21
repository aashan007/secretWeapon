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

1. Fork it (<https://github.com/aashan007/secretWeapongit co>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
