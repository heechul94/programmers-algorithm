function solution(progresses, speeds) {
    const complete = new Array(progresses.length).fill(0);
    let count = 0;
    const result = [];
    while(!progresses.every(progress=>progress==="complete")){
        progresses.forEach((el,idx)=> {
            if(el==="complete"){ 
            }else if(el>=100){
                complete[idx] = count;
                progresses[idx] = "complete";
            }else{
                progresses[idx] = el+speeds[idx];
            };
        });
        count++;
    };
    
    let temp = 0;
    let index = -1;
    complete.forEach(el=>{
        if(temp < el){
            temp = el;
            result.push(1);
            index++;
        }else{
            result[index]++;
        };
    });
    return result;
}