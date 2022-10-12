// 테케 input[0], input[1], input[2] 로 A, B, V 구분
var input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');
console.log(Math.ceil((input[2] - input[1]) / (input[0] - input[1])));