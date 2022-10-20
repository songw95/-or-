 // 백준  수 정렬하기 
 var input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
 input.shift();
 var num = input.sort(function(a, b) { return a - b });
 for (var i = 0; i < num.length; i++) {
     console.log(num[i]);
 }