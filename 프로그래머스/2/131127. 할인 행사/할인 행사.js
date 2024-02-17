// 일정금액 지불 --> 회원(10일간) <-- 매일 한가지 제품 할인
// 할인 제품은 하루에 하나씩만 구매 가능


function solution(want, number, discount) {
    let result = 0;
    const items = {};
    want.forEach((item,idx) => items[item]=number[idx]);
    for(let i = 0; i <= discount.length-10; i++){
        const tempItems = {...items};
        const temp = discount.slice(i,10+i);
        temp.forEach(item => {
            if(tempItems[item]){
                tempItems[item]--;
            };
        });
        Object.values(tempItems).every(count => count === 0 ) && result++;
    };
    return result;
}