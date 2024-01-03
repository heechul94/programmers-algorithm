function solution(num) {
    let answer = 0;
    let number = num;
    while(answer <= 500){
        if(number === 1){
            break;   
        }else if(number%2 !== 0){
            number = (number * 3) + 1;
            answer++;
        }else if(number%2 === 0){
            number = number/2;
            answer++;
        }
    };
    if(answer >= 500) answer = -1;
    
    return answer;
}