function solution(s) {
    let zeroCount = 0;
    let binaryCount = 0;
    let str = s;
    while(str!=="1"){
        // str이 0을 포함하고 있으면 아래 로직을 실행한다.
        if(str.includes("0")){
        // str의 0을 count한다.
            for (let i = 0; i < str.length; i++){
                if(str[i]==="0"){
                    zeroCount++;
                };
            };
        // str의 0을 제거한다.
            str = str.replaceAll("0","");
        }
        // s의 길이를 2진법으로 변환한 문자열로 바꾼다.
            let converted = "";
            let length = str.length;
            while(length>1){
                converted = String(length%2) + converted;
                length = parseInt(length/2);
            };
            converted = String(length) + converted
        // 2진법 변환한 횟수를 count 한다.
            binaryCount++;
        // str을 변환한 2진법으로 바꿔준다.
            str = converted;
    };
    return [binaryCount,zeroCount];
}