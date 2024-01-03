function solution(num_list) {
    let answer = 0;
    let even = '';
    let odd = '';
    num_list.forEach(element => element%2 ? odd+=element : even+=element)
    answer = Number(even)+Number(odd)
    return answer;
}