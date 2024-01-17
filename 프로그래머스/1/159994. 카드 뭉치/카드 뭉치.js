// goal의 첫 번째 요소는 cards1 이나 cards2의 첫 번째 요소 밖에 못 온다.
// cards1 과 cards2를 reverse()로 뒤집어 pop()으로 하나씩 뽑아온다.
// 반복문으로 goal의 요소를 순회하며 뽑아온 cards 1,2의 요소들과 비교한다.
// 가져가지 못한 요소는 다시 원래 카드 뭉치로 push 로 넣어준다.
// 반복한다.
// 반복문이 끝나고 cards 1,2의 길이가 0이 아니면 "No" 0이면 "Yes"를 보여준다
function solution(cards1, cards2, goal) {
    const deck1 = [...cards1.reverse()]
    const deck2 = [...cards2.reverse()]
    const resultDeck = [];
    for(let i = 0; i < goal.length; i++){
        const card1 = deck1.pop();
        const card2 = deck2.pop();
        if( goal[i] === card1 ){
            // console.log(card1)
            resultDeck.push(card1);
        }else if( goal[i] !== card1 ){
            deck1.push(card1);
        }
        if( goal[i] === card2 ){
            resultDeck.push(card2);
        }else if( goal[i] !== card2 ) {
            deck2.push(card2);
        }
    }
    return resultDeck.length === goal.length ? "Yes" : "No"
}