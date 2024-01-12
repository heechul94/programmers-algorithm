function solution(array, commands) {

    // [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3  
    // 잘린 배열 [5, 2, 6, 3]  == 정렬 ==> [2, 3, 5, 6]  == k(3) 번째 ==> 5
    // i, j, k = 배열 인덱스 x. 그냥 순서 2번째 = 1 인덱스
    // commands 2차원 배열의 모든 원소들을 위의 연산을 거쳐 결과를 배열에 담아야한다.
    // commands의 길이 만큼 순회한다.
    // splice로 commands[i][0]-1 부터 commands[i][1] 를 인자로 잘라주고 sort로 오름차순을 정령해준뒤 commands[i][2]-1 인덱스의 값을 arr에 push 해준다
    // commands[i][n]은 순서이기때문에 -1을 해준다.
    let arr = [];
    for (let i = 0; i < commands.length; i++){
       arr.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)[commands[i][2]-1])
    
    }
    return arr
}