function solution(clothes) {
    const count = {};
    let result = 0;
    clothes.forEach(item => {
        if(!count[item[1]]){
            count[item[1]] = 1;
        }else{
            count[item[1]]++;
        };
    });
    const arr = Object.values(count);
    result = arr.reduce((acc,cur)=>acc*(cur+1),1) - 1;
    return result
}