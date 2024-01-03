const manual = {
  w: (item)=>++item,
  s: (item)=>--item,
  d: (item)=>item+=10,
  a: (item)=>item-=10,
};
function solution(n, control) {
    let answer = 0;
    let temp = n;
    [...control].forEach(element => temp = manual[element](temp));
    return answer = temp
}