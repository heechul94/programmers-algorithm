//최저 순위번호 win_nums에 일치한 lottos 개수 or win_nums에 일치한 lottos가 없을경우 낙첨이 최저일 수도 있다.
//최고 순위 win_nums에 일치한 lottos 개수 + 0개수
function solution(lottos, win_nums) {
    const correct = lottos.filter(num=>win_nums.includes(num));
    const zeroCount = lottos.filter(num => num === 0 );
    const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6, };
    const result = [rank[correct.length + zeroCount.length], rank[correct.length]];
    return result
}