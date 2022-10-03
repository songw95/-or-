var input = require('fs').readFileSync('dev/stdin').toString().split(' ');
var a = input[0];
var b = input[1];
var c = input[2];
if (c - b <= 0) { // 수익이 0 이거나 -마이너스 일때.  -일때만 하면 틀림.
    console.log(-1);
} else {
    console.log(Math.floor(a / (c - b) + 1));
}