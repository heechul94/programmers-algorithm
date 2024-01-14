// 콜라 빈병 2개를 가져다주면 1병을 준다.
// 콜라 20병일 때 10 => 5 => 2, (나머지 1) => 1 => 1 (나머지 1 + 1 = 2병이 만들어지므로)
// 필요한 빈병 a, 받는 병 b, 가지고있는 병 n 일때 받을 수 있는 병은?
// n을 a로 나눠가며 몫들을 합해준다,
// 나머지가 있으면 나머지를 변수로 할당해 나머지 따로 합해준다.
// 더이상 나눌 수 없을때 결과와 나머지 변수를 더해 위의 순서를 반복해준다.
// 나머지와 마지막 결과가 필요한 병 a 보다 적으면 끝낸다.
// 1. 빈병 20병 시작
// 2. 2병당 1병 => 20병 주고 새거 10병 => 20/2 = 10
// 3. 10병 시작 => 10병 주고 새거 5병 => 10/2 = 5
// 4. 5병 시작 => 4병 주고 새거 2병, 기존 1병 남음 => parseInt(5/2), 5%2
// 5. 2병 시작 => 2병 주고 새거 1병 => 필요한 빈병 2개 > 새로 받은병 1
// 6. 새로받은병 1 + 기존 남은병 1 => 새병 2 >= 필요한병 2개
// 7. 남은병 0개 새병 2개 시작 => 2병 주고 새거 1병 => 남은병 0 새거 1병
function solution(a, b, n) {
    let hsBottle = n;
    let remain = 0;
    let result = 0;
    while(hsBottle>=a){
        remain += hsBottle%a
        hsBottle = parseInt(hsBottle/a)*b;
        result += hsBottle;
    }
    
    if(remain+hsBottle>=a){
        // console.log(remain+hsBottle,result)
        let sum = remain+hsBottle;
        remain = 0;
        result += solution(a, b, sum)
    }
    return result
}