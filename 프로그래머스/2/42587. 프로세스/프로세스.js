function solution(priorities, location) {
    let count = 0;
    const process = priorities[location] + "o";
    priorities[location] = process;
    while(priorities.includes(process)){
        const first = priorities.shift();
        const check = priorities.find(el=> {
            if(el === process){
                return +el[0] > first;
            };
            if(first === process){
                return el > +first[0];
            };
            return el > first;
        });

        if(check){
            priorities.push(first);
        }else{
            count++;
        };
    };
    return count;
}