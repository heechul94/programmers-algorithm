function solution(str_list, ex) {
    let answer = '';
    temp = str_list.filter(element => element.indexOf(ex)<0)
    answer = temp.join("")
    return answer;
}