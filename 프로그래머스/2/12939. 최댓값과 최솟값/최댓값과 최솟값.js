function solution(s) {
    const temp = s.split(" ").sort((a,b)=> +a - +b);
    return String(temp[0]) + " " + String(temp[temp.length - 1]);
}