// 백준 킹 ,퀸 , 룩, 비숍, 나이트, 폰  
var input = require('fs').readFileSync('dev/stdin').toString().split(' ');
var chess = [1, 1, 2, 2, 2, 8];
// 주어진 채스 개수 input 에   출력1 - 예제1     변수 i 랑 j 줌.
var output = input.map((i, j) => {
    return chess[j] - i;
})
console.log(...output);