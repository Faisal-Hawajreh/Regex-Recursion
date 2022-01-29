// function division(number, dividedBy){
//     // Write you logic here.
    
//     if(number === 0 || dividedBy === 0){return 0}
//     else if(number === dividedBy){return 1}
//     else if(number < dividedBy){return 0.1*(division(number*10, dividedBy))}
//     else{return division(dividedBy, dividedBy)+ division(number-dividedBy, dividedBy)};
// }
// console.log(division(7, 2))



// try later
// function division(number, dividedBy){
//     // Write you logic here.
//     let result ;
//     if(number === 0 || dividedBy === 0){return 0}
//     else if(number === dividedBy){return 1}
//     else if((10**8)*result<10**8){return lastResult}
//     else if(number < dividedBy){
//         let result = 0.1*(division(number*10, dividedBy))
//         let lastResult = result
//         return result
//     }
//     else{return division(dividedBy, dividedBy)+ division(number-dividedBy, dividedBy)};
// }
// console.log(division(7, 2))
// console.log(division(10, 2))
// console.log(division(0, 2))
// console.log(division(10, 0))
// console.log(division(7, 0))
// console.log(division(7, 3))

// console.log(10**3)

function pow(x,n){
    // Write you logic here.
    if(n===0){return 1}
    else if(n===1){return x}
    else{return x*pow(x,n-1)}
}
console.log(pow(0,0))

function fibonacci(n){
    // Write you logic here.
    if (n === 0){return 0}
    else if (n===1){return 1}
    else {return fibonacci(n-1)+fibonacci(n-2)}
}
console.log(fibonacci(5))



// function permutations(n,k){
//     let arrK =[];
//     let arr = [];
//     // Write you logic here. 
//     if(k===0){return arr}

//     else if (k===1){
//         for(let i = 1;i<=n;i++){
//             arr[i-1] = i
//         } 
//         return arr
//     }
    


//     else{

//         for(let i = 0;i<k;i++){
//             arrK[i] = permutations(n,1)
//                     for(let j = 1;j<=n;j++){
//                         arrK[i][j-1] = permutations(n,1)[j-1] + permutations(n,1)[j-1]*10
//                     }

//             }
//         return arrK
//     }

    
// };

// console.log(permutations(3,2));

function permutations(n,k){
    let arrK =[];
    let arr = [];
    // Write you logic here. 
    if(k===0){return arr}

    else if (k===1){
        for(let i = 0;i<n;i++){
            arr[i] = i+1
        }
        return arr
    }
    else{

        
            for(let i = 0;i<k;i++){
                arrK.push(permutations(n,1))
                for(let j=0;j<k;j++){
                    arrK[i][j]+= 10**(k-1)
                }
            }
        return arrK
    }

    
};

console.log(permutations(3,3));