function solution(n) {
    let first = 0;
    let second = 1;
    let answer = 0;
    // n = 2 F(2) = F(0) + F(1)
    // n = 3 F(3) = F(1) + F(2) 
    // n = 4 F(4) = F(2) + F(3)
    // 초기 첫번째 = 0, 두번째 = 1
    // n = 3 일때 2에서 첫번째 0 + 두번째 1 = 1
    // 두번째는 첫번째로 바꿔주고 결과값은 두번째로 바꿔준다.
    // 3에서 첫번째와 두번째를 더한다.
    for(let i = 2; i <= n; i++){
        answer = (first + second)%1234567;
        first = second;
        second = answer;
    }
    return answer;
}