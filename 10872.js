// 소스 코드 1
let input = require('fs').readFileSync('dev/stdin').toString();

//factorial(n) 에 대입시킴.
function factorial(n) {
    // 1 부터 시작임.
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
// factorial(input) 을
console.log(factorial(input));

// 소스코드 2
var input = require('fs').readFileSync('dev/stdin').toString().trim();
var output = 1; // 1부터 시작 미리 선언
for (var i = 1; i <= input; i++) {
    output *= i;
}
console.log(output);