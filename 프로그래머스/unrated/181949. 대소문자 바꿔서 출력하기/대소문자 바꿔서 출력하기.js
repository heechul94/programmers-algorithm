const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let temp = [...str];
    temp = temp.map(el=>(el===el.toUpperCase())?el.toLowerCase():el.toUpperCase())
    console.log(temp.join(""))
});