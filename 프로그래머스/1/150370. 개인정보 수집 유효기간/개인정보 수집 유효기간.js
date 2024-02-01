function solution(today, terms, privacies) {
    const termsObj = {}
    let yyyy = 0;
    let mm = 0;
    let dd = 0;
    const answer = [];
    terms.forEach(e=> termsObj[e.split(" ")[0]] = +e.split(" ")[1])
    const res = privacies.map(e=> {
        mm = +e.split(" ")[0].split(".")[1] + termsObj[e.split(" ")[1]];
        if(mm>12){
            yyyy = +e.split(" ")[0].split(".")[0] + parseInt(mm%12 ? mm/12 : mm/12 - 1);
            mm = mm%12 === 0 ? 12 : mm%12; 
            dd = +e.split(" ")[0].split(".")[2] - 1;
        }else{
            yyyy = +e.split(" ")[0].split(".")[0];
            dd = +e.split(" ")[0].split(".")[2] - 1;
        }
        if(dd === 0 && mm === 1){
            yyyy -= 1;
            mm = 12;
            dd = 28 - dd;
        }else if ( dd === 0 ){
            mm -= 1;
            dd = 28 - dd;
        }
        return `${yyyy}.${String(mm).padStart(2,"0")}.${String(dd).padStart(2,"0")}`;
    })
    res.forEach( (e,i) => (+e.split(".").join("") < +today.split(".").join("")) && answer.push(i+1) );
    console.log(res)
    return answer;
}