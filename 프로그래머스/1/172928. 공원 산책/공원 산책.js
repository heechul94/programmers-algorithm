function solution(park, routes) {
    const result = []
    park.forEach((e,i)=> e.includes("S")&& result.push(i,e.indexOf("S")))
    for(let route of routes){
        const routeInfo = route.split(" ")
        const direction = routeInfo[0];
        const moveCount = +routeInfo[1];
        let temp = 0
        switch(direction){
            case "W":
                temp = result[1];
                for(let i = 0; i < moveCount; i++){
                    if(!park[result[0]][result[1]-1]||park[result[0]][result[1]-1]==="X"){
                        result[1] = temp;
                        break;
                    }else{
                        result[1]--;
                    };
                };
                break;
            case "E":
                temp = result[1];
                for(let i = 0; i < moveCount; i++){
                    if(!park[result[0]][result[1]+1]||park[result[0]][result[1]+1]==="X"){
                        result[1] = temp;
                        break;
                    }else{
                        result[1]++;
                    };
                };
                break;
            case "N":
                temp = result[0];
                for(let i = 0; i < moveCount; i++){
                    if( !park[result[0]-1] || park[result[0]-1][result[1]] === "X"){
                        result[0] = temp;
                        break;
                    }else{
                        result[0]--;
                    };
                };
                break;
            case "S":
                temp = result[0];
                for(let i = 0; i < moveCount; i++){
                    if(!park[result[0]+1] ||park[result[0]+1][result[1]]==="X"){
                        result[0] = temp;
                        break;
                    }else{
                        result[0]++;
                    };
                };
                break;
        };
    };
    return result;
}