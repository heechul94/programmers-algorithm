const number = {
    zero : 0,
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    five : 5,
    six : 6,
    seven : 7,
    eight : 8,
    nine : 9
}

function solution(s) {
    let answer = 0;
    let string = s;
    Object.entries(number).forEach(([key,value])=>{
        string = string.replaceAll(key,value);
    })
    answer = string;
    return Number(answer);
}