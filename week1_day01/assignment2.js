String.prototype.filterWords = function(words) {
  let output = this.toString();
  for(let input in words) {
    output = output.replace(words[input], "***");
  }
  return output;
}
console.log("This house is nice!".filterWords(['house', 'nice']));