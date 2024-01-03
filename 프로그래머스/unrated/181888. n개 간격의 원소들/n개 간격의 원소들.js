function solution(num_list, n) {
    let answer = [];
    answer = num_list.filter((_,index)=>index%n==0)
    return answer;
}