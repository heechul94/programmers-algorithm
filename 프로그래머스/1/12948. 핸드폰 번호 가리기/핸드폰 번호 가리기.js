function solution(phone_number) {
    let temp = ''
    let star = ''
    temp = phone_number.slice(-4);
    star = new Array(phone_number.length-4).fill('*').join('')
    return star+temp;
}