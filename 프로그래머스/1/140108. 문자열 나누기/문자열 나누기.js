function solution(s) {
    let equalCount = 0;
    let differentCount = 0;
    let separatedCount = 0;
    let word = '';
    for(let i = 0; i < s.length; i++){
        if( word === ""){
            word = s[i];
        }
        if(word===s[i]){
            equalCount++;
        }else if(word!==s[i]){
            differentCount++;
        }
        if(differentCount === equalCount && word !== ""){
            separatedCount++;
            equalCount = 0;
            differentCount = 0;
            word = '';
        }
    }
    if(equalCount !== 0 || differentCount !==0) separatedCount++;
    return separatedCount;
}