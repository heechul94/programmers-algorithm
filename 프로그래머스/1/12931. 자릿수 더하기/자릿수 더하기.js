function solution(n)
{
    let answer = 0;
    let arr = [...String(n)]
    answer = arr.reduce((acc,cur)=>Number(acc)+Number(cur),0)
    return answer;
}