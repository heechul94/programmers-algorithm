function solution(angle) {
    let answer = 0;
    switch (true) {
        case (angle === 180) :
            answer = 4;
            break;
        case (90<angle) :
            answer = 3;
            break;
        case (angle === 90) :
            answer = 2;
            break;
        case (angle < 90) :
            answer = 1;
            break;
    }
    return answer;
}