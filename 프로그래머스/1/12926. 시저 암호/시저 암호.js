function solution(s, n) {
    let answer = '';
    let string;
    
    string = [...s].map(e=>{
        if( e === " " ) return " ";
        if( e.charCodeAt() < 91 && e.charCodeAt() + n > 90){
            return String.fromCharCode(e.charCodeAt() + n - 26);
        }else if( e.charCodeAt() >= 97 && e.charCodeAt() < 123 && e.charCodeAt() + n > 122){
            return String.fromCharCode(e.charCodeAt() + n - 26);
        }else return String.fromCharCode(e.charCodeAt() + n)
        
    });
    answer = string.join("")
    return answer;
}