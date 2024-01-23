// 조카가 낼수 있는 발음을 배열로 만들어준다.
// babbling 의 각 요소를 조카의 발음 과 일치한 문자열이 있는지 찾는다.
// 해당하는 조카 발음 배열의 index를 구해 중복된 index가 있는지 찾는다.
// 결과를 이용하여 조카가 발음 할수 있는 단어를 찾는다.
function solution(babbling) {
    const canSpeak = ["aya", "ye", "woo", "ma"];
    let words = [...babbling]
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < canSpeak.length; j++){
           words[i] = words[i].replaceAll(canSpeak[j],j);
        }
    }
    words = words.filter(el=> !isNaN(Number(el)));
    words.forEach((e,index)=>{
        for(let i = 0; i < e.length-1; i++){
            if(e[i]===e[i+1]){
                words[index] = false
            }
        }
    })
    return words.filter(e=>e).length
}