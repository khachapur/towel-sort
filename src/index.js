module.exports = function towelSort (matrix = []) {
let arr = [];
  for (let i = 0; i < matrix.length; i++ ){
    matrix[i]= matrix[i]
    if (i%2 !== 0){
      matrix[i] = matrix[i].reverse()
    }
  }
  for (subArr of matrix){
    for (elem of subArr){
     arr.push(elem);

    }
  }
  return arr;
}
