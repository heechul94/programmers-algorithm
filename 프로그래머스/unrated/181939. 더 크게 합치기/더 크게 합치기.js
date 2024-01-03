function solution(a, b) {
    let answer = 0;
    let bindedA = String(a)+String(b);
    let bindedB = String(b)+String(a);
    answer = (bindedA>bindedB)? Number(bindedA) : Number(bindedB);
    return answer;
}