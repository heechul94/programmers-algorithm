
function solution(food) {
    const player1 = [];
    food.forEach((e,index)=>{
        for(let i = 0; i < parseInt(e/2); i++){
            player1.push(index);
        };
    })
    const player2 = [...player1]
    player2.sort((a,b)=>b-a);
    const answer = player1.join('') + '0' + player2.join('');
    return answer;
}