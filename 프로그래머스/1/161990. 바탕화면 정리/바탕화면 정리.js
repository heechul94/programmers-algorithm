function solution(wallpaper) {
    const x = [];
    const y = [];
    for(let i = 0; i < wallpaper.length; i++){
        if(wallpaper[i].includes("#")) {
            y.push(i);
        };
        wallpaper[i].split("").forEach((e,index) => {
            if(e==="#") x.push(index);
        });
    };
    const lux = Math.min(...y);
    const rdx = Math.max(...y) + 1;
    const luy = Math.min(...x);
    const rdy = Math.max(...x) + 1;
    return [lux,luy,rdx,rdy];
}
    