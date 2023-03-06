let initialArr = [];
let n = parseInt(process.argv[2]);
let k = parseInt(process.argv[3]);
let p = 0

for (let i = 1; i <= n; i++) {
    initialArr.push(i);
}

function incArr(skip){
    let j = 1;
    while (j<=skip) {
        p = p+1;      
        if(p==(initialArr.length+1)){
            p = 1;
        }  
        j = j+1;
    }
    return p;
}

while (initialArr.length!=1) {
    let position = incArr(k);
    if(position==0){
        initialArr.splice((initialArr.length-1),1)
    }else
    {
        initialArr.splice(position-1,1)
    }
    p = p-1;
}

console.log(initialArr)
