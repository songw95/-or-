var input = require('fs').readFileSync('dev/stdin').toString().split('\n');
var c = input[0];
for (var i = 1; i <= c; i++) {
    var score = input[i].split(' '); // 전체 점수들 공백 구분
    var n = score.shift(); // 전체 학생수(점수 들 각 각). 맨 앞 수 제거
    var count = 0;
    var avg = score.reduce(function(acc, v) { return acc += v * 1 }, 0);
    avg /= n; //       전체 합 / 인원수 = 평균 
    for (var j = 0; j <= n; j++) {
        // 평균 넘는 점수 는
        if (avg < score[j]) {
            count++; // 대입 해 증가
        }
    }
    // 비율% 구하기 (평균넘는 수 들 / 전체 인원수 * 100)
    var result = ((count / n) * 100).toFixed(3);
    // 비율 % 붙여 출력
    console.log(result + '%');
}


/*

입력
첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

출력
각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

예제 입력 1  복사
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
예제 출력 1  복사
40.000%
57.143%
33.333%
66.667%
55.556%

*/