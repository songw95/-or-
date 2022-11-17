var input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
var T = input.shift(); // 첫 번째 줄에는 데이터 세트의 수를 나타내는 단일 정수 n 이 포함
for (var i = 0; i < T; i++) { // n 줄
    var data = input[i].split(' ');
    var x = data[0];
    var y = data[1];
    if (x >= y) {
        console.log("MMM BRAINS");
    } else {
        console.log("NO BRAINS");
    }
}