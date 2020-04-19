function findRepatedStringCount(long,short){
    let count=0;
    for(let i=0;i<long.length;i++){
     for(let j=0;j<short.length;j++){
            if(long[i+j]!==short[j]){
               break;
            }

            if(((short.length-1) ===j)){
               count++;
            }
        }   
    }
    console.log(count)
}

findRepatedStringCount('wowomgzomg', 'omg');
//'ababc' 'abc'
