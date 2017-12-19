class Block {
  constructor(index, previous, timeStamp, data, hash) {
    this.index = index;
    this.previous = previous.toString();
    this.timeStamp = timeStamp;
    this.data = data;
    this.hash = hash.toString();
  }
}

const calculateHash = (index, previousHash, timeStamp, data) => {
  return 
}
