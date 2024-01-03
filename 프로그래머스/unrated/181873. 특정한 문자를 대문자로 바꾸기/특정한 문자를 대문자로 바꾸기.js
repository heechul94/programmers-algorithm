function solution(my_string, alp) {
    let answer = '';
    let temp = [...my_string];
    temp = temp.map(item=>(item===alp)?item.toUpperCase():item);
    answer = temp.join('');
    
    return answer;
}