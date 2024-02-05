function solution(n,a,b){
    // a, b의 배정받은 번호가 하나는 2의 배수이고 하나는 그 2의 배수의 -1인지 확인한다.
    // 2의 배수 -1 ~ 2의 배수에 속한 a or b는 다음 라운드에 2의 배수 / 2의 번호를 배정받는다.
    // 아니면 다음 라운드로 넘어간다.
    let count = 1;
    let playerA = a;
    let playerB = b;
    for(let i = n; i > 1; i-=2){
        if((playerA - 1 === playerB && playerA%2 === 0 )|| (playerB - 1 === playerA && playerB%2 === 0)){
            break;
        }
        if(playerA%2 !== 0){
            playerA = (playerA+1)/2;
        }else if(playerA%2 === 0){
            playerA = playerA/2;
        };
        if(playerB%2 !== 0){
            playerB = (playerB+1)/2;
        }else if(playerB%2 === 0){
            playerB = playerB/2;
        };
        count++;
    }
    return count;
}