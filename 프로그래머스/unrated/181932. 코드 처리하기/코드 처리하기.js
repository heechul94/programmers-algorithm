function solution(code) {
    let answer = '';
    let mode = 0;
    for (let idx = 0; idx < code.length; idx++){
      if(mode==0&&code[idx]!='1'&&idx%2==0){
        answer += code[idx]
      }else if(code[idx]==='1'){
        mode = !mode
      }else if (mode==1&&code[idx]!='1'&&idx%2==1){
        answer += code[idx]
      }
    }
    if (!answer) answer='EMPTY'
    return answer;
}