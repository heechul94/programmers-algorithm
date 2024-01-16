// 한달에 31일인 달과 30일인 달 29일인 달이 있다.
// 31일 => 1, 3, 5, 7, 8, 10, 12
// 30일 => 4, 6, 9, 11
// 29일 => 2
// 해당 월이 31일이면 다음 달 1일은 3일 뒤고
// 해당 월이 30일이면 2일 뒤고
// 2월이면 하루 뒤다
// 1월 1일 금요일을 FRI 를 첫번째로 잡고 비교할 배열을 만들어준다 
// ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
// 만약 a = 5 b = 24 => 5월 24일 의 요일을 구할때
// 1 에서 4 까지 순회하며 조건문으로 해당 월에 맞는 일수를 더한다.
// 예) 1 => +3, 2 => +1, 3 => +3, 4 => +2
// 그뒤 b와 이전 과정에 더한 값을 더해준다
// 24 + 3 + 1 + 3 +2 => 33
// 33을 7로 나누어 나머지 값에서 1일을 빼준 수 만큼 요일을 이동해준다.
// 33 % 7 = 5 - 1 => FRI -> SAT -> SUN -> MON -> TUE

function solution(a, b) {
    const resultArr = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    let day = 0
    for(let i = 1; i < a; i++){
        if( i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12){
            day += 3;
        }else if (i === 4 || i === 6 || i === 9 || i === 11){
            day += 2;
        }else {
            day += 1;
        }
    };
    day += b-1;
    return resultArr[day%7]
    
}