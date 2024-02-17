function solution(want, number, discount) {
    let result = 0;
    const items = {};
    want.forEach((item,idx) => items[item]=number[idx]);
    for(let i = 0; i <= discount.length-10; i++){
        const tempItems = {...items};
        const discounts = discount.slice(i,10+i);
        discounts.forEach(item => {
            if(tempItems[item]){
                tempItems[item]--;
            };
        });
        Object.values(tempItems).every(count => count === 0 ) && result++;
    };
    return result;
}