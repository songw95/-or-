/*문제 설명

머쓱이는 40 살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다.나이 age가 주어질 때, 2022 년을 기준 출생 연도를
return 하는 solution 함수를 완성해주세요.
    // age  = 40살, 23 살 나이, 몇년도 태어났나 구하기 2022 년 기준
*/
function solution(age) {
    //           40
    var answer = 2022 - age + 1;
    // 출생 연도 반환
    return answer;
}