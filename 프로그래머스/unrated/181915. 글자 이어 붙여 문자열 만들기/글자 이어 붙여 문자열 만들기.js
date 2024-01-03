function solution(my_string, index_list) {
    let answer = '';
    const menu = new Object(my_string);
    index_list.forEach(index=> answer += menu[index])
    return answer;
}