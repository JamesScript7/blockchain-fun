var CryptoJS = require('crypto-js');

class Block {
  constructor(index, previousHash, timeStamp, data, hash) {
    this.index = index;
    this.previous = previousHash.toString();
    this.timeStamp = timeStamp;
    this.data = data;
    this.hash = hash.toString();
  }
}

const calculateHash = (index, previousHash, timeStamp, data) => {
  return CryptoJS.SHA256(index + previousHash + timeStamp + data).toString();
}

const getLatestBlock = () => {

}

const generateNextBlock = (blockData) => {
  let previousBlock = getLatestBlock();
  let nextIndex = previousBlock.index++;
  let nextTimeStamp = new Date().getTime() / 1000;
  let nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimeStamp, blockData);
  
  return new Block(nextIndex, previousBlock.hash, nextTimeStamp, blockData, nextHash);
}

const getGenesisBlock = () => {
  return new Block(0, "0", 1513644863, "my genesis block", "3b733bdc915f8391a0696f86b5655f644b59680380a33ad42040e937fcd11716");
}

let blockchain = [getGenesisBlock()];
