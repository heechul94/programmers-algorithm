function solution(n, m, section) {
    const wall = new Array(n).fill(1).map((e,i)=>e+i);
    const afterWall = []
    let count = 0;
    for(let i = 0; i < section.length; i++){
        if(wall.includes(section[i])){
            afterWall.push(...wall.splice(wall.indexOf(section[i]),m));
            count++;
        }
    }
    return count;
}