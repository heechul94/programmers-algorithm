
// choices 범위가 1~3 이면 survey[i][0] ( 4 - choices[i] )
// 5~7 이면 survey[i][1] ( choices - 4 )

const character = {
    R:0, T:0,
    C:0, F:0, 
    J:0, M:0,
    A:0, N:0,
};

function solution(survey, choices) {
    let result = "";
    for (let i = 0; i < choices.length; i++){
        if(choices[i]>0&&choices[i]<4){
            character[survey[i][0]] += 4 - choices[i];
        }else if(choices[i]>4&&choices[i]<8){
            character[survey[i][1]] += choices[i] - 4;
        };
    };
    character.R > character.T ? result += 'R' : character.R === character.T ? result += 'R' : result += 'T';
    character.C > character.F ? result += 'C' : character.C === character.F ? result += 'C' : result += 'F';
    character.J > character.M ? result += 'J' : character.J === character.M ? result += 'J' : result += 'M';
    character.A > character.N ? result += 'A' : character.A === character.N ? result += 'A' : result += 'N';
    return result;
}