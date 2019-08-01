function randomNoGen(min, max) {
    if(typeof(max) !== 'number' && typeof(min) !== 'number') {
      min = 0;  max = 1;
    }
    var no = (Math.floor(Math.random() * (max-min) )) + min;
   return no;
  }
  module.exports = randomNoGen;