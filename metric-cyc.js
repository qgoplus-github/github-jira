//#region  COMPLEXITY

//This has Complexity = 5. {FOR, IF}
function sumOfNonPrimes(limit) {            
    var sum = 0, i = 0, j = 0;                  
    OUTER: for (i = 0; i < limit; ++i) {        
        if (i <= 2) {                           
            continue;                           
        }                                       
        for (j = 2; j < i; ++j) {               
            if (i % j === 0) {              
                continue OUTER;
            }
        }
        sum += i;
    }
    return sum;
}

/* This has Complexity = 5.  {IF}*/
function getWeight(i) {
    if (i <= 0) { return 'no weight'; }
    if (i <= 0) { return 'light'; }
    if (i <= 0) { return 'medium'; }
    if (i <= 0) { return 'heavy'; }
    return 'very heavy';
}

/* This has Complexity = 3.  {IF ELSE}*/
function a(x) {
    if (x = 1) {
        return 1;      // 1st path
    } else if (x = 2) {
        return 2;      // 2nd path
    } else {
        return x;      // 3rd path
    }
}


/**
 * This has Complexity = 1. {IF}
 */
function b(x) {
    if (x = 1) {
        return 1;     
    }
}

/* TODO: Need to check CYC for Loop While*/
// TODO Need to check CYC for Switch Case 

/* FIXME: Need to check CYC for Loop While*/
// FIXME Need to check CYC for Switch Case 

TODO
FIXME
//#endregion