/* 숫자 세 개가 주어졌을 때, 가장 작은 수, 그 다음 수, 가장 큰 수를 출력하는 프로그램을 작성하시오
    제일 작은 수, 그 다음 수, 제일 큰 수를 차례대로 출력

    3 1 2 를 1 2 3 으로 
    .sort(function(a,b){return a-b;});
*/
var input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').sort((a, b) => a - b);
console.log(...input);