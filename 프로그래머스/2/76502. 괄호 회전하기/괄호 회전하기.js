function check(string){
    const compare = ["()","{}","[]"];
    let changed = string;
    let isIncluded = true;
    // s를 순차적으로 "()", "{}", "[]"기준으로 split 하고 합쳐준다.
    // s가 ""가 된다면 옳은 문자열 ""가 아니라면 옳지 않은 문자열이다.
    while(isIncluded){
        if(changed.includes("()") || changed.includes("{}") || changed.includes("[]")){
            for(const c of compare){
                changed = changed.split(c).join("");
            };
        }else{
            isIncluded = false;
        };
    };
    if(changed===""){
        return true;
    }else{
        return false;
    };
}

function convert(string){
    let temp = "";
    temp = string[0];
    string = string.slice(1);
    string = string + temp;
    return string;
}

function solution(s) {
    let result = 0;
    let str = s
    for(let i = 0; i < str.length; i++){
        if(check(str)){
            result++;
        }
        str = convert(str);
    };
   return result;
}