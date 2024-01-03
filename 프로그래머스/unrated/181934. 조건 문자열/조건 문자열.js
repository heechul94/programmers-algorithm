function solution(ineq, eq, n, m) {
     let answer = false;
    let compare = ineq+eq
    switch (compare){
      case '>=' :
        answer = n >= m;
        break;
      case '<=' :
        answer = n <= m;
        break;
      case '>!' :
        answer = n > m;
        break;
      case '<!' :
        answer = n < m;
        break;
    }
    return +answer;
}