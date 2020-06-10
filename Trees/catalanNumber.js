function catalanNumber(n) {
    /**
        2n 
            C
             n
      -----------
          n+1       
    */

    let i = 2 * n;
    let t = 2 + 1;
    let c = 1;
    let cn =1;
    for (let k = i; k > n; k--) {
        c *= k
    }

    for (let k = n; k > 0; k--) {
        cn *= k
    }
    let n1 = n+1;
    let lower = cn *n1;
    let final  = c / lower;
    return final
}


catalanNumber(8)
