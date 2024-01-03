function solution(my_string, overwrite_string, s) {
    let answer = '';
    let arr = [];
    arr = [...my_string];
    arr.splice(s,overwrite_string.length,overwrite_string);
    answer = arr.join("");
    return answer;
}