function solution(slice, n) {
    var answer = Math.floor((n - 1) / slice) + 1;
    return answer;
}

console.log(solution(8, 4));
/* 피자 조각수 slice 7  피자 먹는 사람 수  n  10      result   2   판 
                  4                     12              3
                  8                     4               1
*/
//Math.floor(); 인수보다 작거나 같은 수 중에서 가장 큰 정수를 반환
// n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지
//+1 한건 계산이 1.2 이런식으로 정수로떨어지지 못해 +1 해줌