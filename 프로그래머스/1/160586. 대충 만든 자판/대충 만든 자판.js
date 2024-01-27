function solution(keymap, targets) {
    let result = [];
    targets.forEach(e => {
        const arr = [];
        for(let i = 0; i < e.length; i++){
            const temp = [];
            keymap.forEach(el => {
                if(el.indexOf(e[i])+1>0)
                temp.push(el.indexOf(e[i])+1)
            });
            arr.push(Math.min(...temp));
        }
        if(!arr.includes(Infinity)){
            result.push(arr.reduce((acc,cur)=>acc+cur));
        }else{
            result.push(-1);
        }
    })
    return result;
}