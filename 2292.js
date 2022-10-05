var N = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
// 몇개의 방 가는지 
var count = 1; // 첨 도형 부터 시작이니 1부터 기록
var i = 1; // 가운데 첨 벌집 1 부터 시작
// 첨 도형부터 목표지점까지 가며
while (i < N) {
    // 방
    i += 6 * count;
    // 몇개 방거치나 기록
    count++;
}
console.log(count);

/* 풀이 과정
 * 이 문제는 벌집의 반경이 늘어 날때 번호의 규칙을 찾는 것이 중요.
 * 규칙은 반경이 1늘어 날때 6의 배수로 늘어남.
 */