function solution(str1, str2) {
    let answer = '';
    let tempArr = new Array((str1.length + str2.length)/2).fill();
    answer = tempArr.map((_,i)=> str1[i]+str2[i]).join("");
    return answer;
}