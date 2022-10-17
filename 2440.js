/* 
  첫째 줄에는 별 N개, 둘째 줄에는 별 N - 1 개, ..., N번째 줄에는 별 1 개를 찍는 문제 < trim() 안해도 틀려 >
  split('\n') 는 틀림.
  '\n' 로 개행..   '\n'  안되고 + '\n'  이걸로..
별 찍는 조건 for문 과 첫줄 부터 막 줄 까지 * 만드는 for문 이중으로 만드는줄 알았음.
*/



let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let result = [];
// 6 ,5 , 4, 3 ,2 ,1, 0
for (let i = input; i > 0; i--) {
    // 조건만큼 별 갯수 받고 개행 반복.
    result += '*'.repeat(i) + '\n';
}

console.log(result);