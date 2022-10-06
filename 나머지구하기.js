// 프로그래머스 
//문제 설명 : 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

// num1 이 3, num2 가 2 일때 3 나누기 2 나머지는 1 리턴

function solution(num1, num2) {
    var answer = Math.floor(num1 % num2);
    return answer;
}