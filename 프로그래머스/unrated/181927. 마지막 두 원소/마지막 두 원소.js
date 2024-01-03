
function solution(num_list) {
    let answer = [];
    let length = num_list.length;
    let last = num_list[length-1];
    let prev = num_list[length-2];

    last>prev ? last-=prev : last*=2;

    answer = num_list.map((el)=> el);
    answer.push(last)
    return answer;
}
