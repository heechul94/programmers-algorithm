function solution(citations) {
    const tempCitations = citations.sort((a,b)=> b-a);
    const n = citations.length;
    let h = tempCitations[0];
    for(let i = h; i >=0; i--){
        const temp = tempCitations.filter(e => e >= h);
        if(temp.length >= h && n-temp.length <= h){
            break;
        };
        h = i-1;
    };
    return h;
}