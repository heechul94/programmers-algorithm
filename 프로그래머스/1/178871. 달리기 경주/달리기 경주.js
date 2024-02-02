function solution(players, callings) {
    const rank = {};
    const player = {};
    for(let i = 1; i <= players.length; i++){
        rank[i]=players[i-1];
        player[players[i-1]] = i;
    };
    for(let i = 0; i < callings.length; i++){
        player[callings[i]]--; // 3
        const temp = rank[player[callings[i]]];
        rank[player[callings[i]]] = callings[i]
        player[temp]++;
        rank[player[temp]]=temp;
    };
    return Object.values(rank);
}