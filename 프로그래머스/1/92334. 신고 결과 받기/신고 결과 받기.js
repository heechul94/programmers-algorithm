function solution(id_list, report, k) {
    const result = [];
    const idObj = {};
    id_list.forEach(e=>idObj[e]={ myCount:0, whoReported:[] });
    report.forEach(e=>{
        const temp = e.split(" ");
        if(!idObj[temp[0]].whoReported.includes(temp[1])){
            idObj[temp[0]].whoReported.push(temp[1]);
            idObj[temp[1]].myCount++;
        };
    });
    const reportedArr = Object.values(idObj)
    reportedArr.forEach((e,i)=>{
        result.push(0);
        e.whoReported.forEach(el=>{
            if(idObj[el].myCount>=k){
                result[i]++;
            };
        });
    });
    return result;
}