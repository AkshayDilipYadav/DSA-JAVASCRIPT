//Page 1


// 1. Fibonacci Sequence

//  1---------------------------------------------------------------------------------------------

function recursionFibonacci(A){

    if(A === 0){return 0;}
    if(A === 1){return 1;}

    return recursionFibonacci(A - 1) + recursionFibonacci(A-2);
}

//Time Complexity of recursionFibonacci : O 2^A
//Space Complexity of recursionFibonacci: O A

function memoizationFibonacci(A, memo={}){

    if(A === 0){return 0;}
    if(A === 1){return 1;}

    if(memo[A]){return memo[A];}

    memo[A] = memoizationFibonacci(A-1, memo) + memoizationFibonacci(A-2, memo);

    return memo[A];
}

//Time Complexity of memoizationFibonacci: O A
//Space Complexity of memoizationFibonacci: O A

function tabulationFibonacci(A){
    if(A <= 1){return A;}
    let dp = new Array(A + 1);
    dp[0] = 0;
    dp[1] = 1;
    for(let i = 2; i <= A; i++){
        dp[i] = dp[i-1] + dp[i - 2];
    }
    return dp[A];
}

//Time Complexity of TabulationFibonacci: O A
//Space Complexity of TabulationFibonacci: O A

function iterativeDpFibonacci(A){
    if(A <= 1){return A;}

    let prev2 = 0, prev1 = 1;

    for(let i = 2; i <= A; i++){
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}



//Time Complexity of iterativeDpFibonacci = O A
//Space Complexity of iterativeDpFibonacci = O 1

//  1---------------------------------------------------------------------------------------------




// 2. Factorial

//  2---------------------------------------------------------------------------------------------

function iterativeFactorial(A){
    let result = 1;
    for(let i = 1; i <= A; i++){
        result *= i;
    }
    return result;
}

//Time Complexity of iterativeFactorial: O A
//Space Complexity of iterativeFactorial: O 1

function recursionFactorial(A){
    if(A === 0 || A === 1){return 1;}
    return A * recursionFactorial(A-1);
}

//Time Complexity of recursionFactorial: O A
//Space Complexity of recursionFactorial: O A

function tailRecursionFactorial(A, accumulator = 1){
    if(A === 0 || A === 1){return accumulator;}
    return tailRecursionFactorial(A-1, A * accumulator);
}

//Time Complexity of tailRecursionFactorial: O A
//Space Complexity of tailRecursionFactorial: O A

function memoizationFactorial(A){
    let memo = {};

    function helper(n){
        if(n === 0 || n === 1){return 1;}
        if(memo[n]){return memo[n];}
        memo[n] = n * helper(n-1);
        return memo[n];
    }
    return helper(A);
}

//Time Complexity of memoizationFactorial: O A
//Space Complexity of memoizationFactorial: O A

function tabulationFactorial(A){
    if(A === 0 || A === 1){return 1;}

    let dp = new Array(A+1);
    dp[0] = 1;
    dp[1] = 1;

    for(let i=2; i <= A; i++){
        dp[i] = dp[i-1] * i;
    }
    return dp[A];
}

//Time Complexity of tabulationFactorial: O A
//Space Complexity of tabulationFactorial: O A

//  2---------------------------------------------------------------------------------------------



// 3. Print from 1 to A

//  3---------------------------------------------------------------------------------------------



function iterativePrintNumbers(A){
    let result = [];
    for(let i = 1; i <= A; i++){
        result.push(i);
    }
    console.log(result.join(" ") + " ");
}

//Time Complexity of iterativePrintNumbers: O A
//Space Complexity of iterativePrintNumbers: O A


function recursionPrintNumbers(A){
    function helper(n, result = []){
        if(n === A + 1){
            console.log(result.join(' ')+ " ");
            return;
        }
        result.push(n);
        helper(n+1, result);
    }
    helper(1);
}

//Time Complexity of recursionPrintNumbers: O A
//Space Complexity of recursionPrintNumbers: O A

function tcoRecurionPrintNumbers(A){
    function helper(n){
        if(n > A){return;}
        process.stdout.write(n + " ");
        helper(n+1);
    }
    helper(1);
    console.log();
}

//Time Complexity of tcoRecursionPrintNumbers: O A
//Space Complexity of tcoRecursionPrintNumbers: O A



//  3---------------------------------------------------------------------------------------------



// 4. implement (A^B) % C

//  4---------------------------------------------------------------------------------------------


function bruteForcePow(A, B, C){
    let result = 1;
    for(let i = 1; i <= B; i++){
        result = (result * A) % C;
    }
    return (result + C)% C;
}

//Time Complexity of bruteForcePow: O B
//Space Complexity of bruteForcePow: O 1

function powMod(A, B, C){
    if(A === 0 && B === 0) return 0;
        
    if(C <= 0) return 0;
    
    A = ((A % C) + C) % C;
    
    if(B === 0) return 1;
    
    let half = powMod(A, Math.floor(B/2), C);
    let result = (BigInt(half) * BigInt(half)) % BigInt(C);
    
    if(B % 2 === 1){
        result = (result * BigInt(A)) % BigInt(C);
    }
    
    return Number(result);
}

//Time Complexity of powMod: O log B
//Space Complexity of powMode: O log B

//  4---------------------------------------------------------------------------------------------




//Page 1


//Page 2



// 1. Sum of Digits

//  1---------------------------------------------------------------------------------------------

function bruteForceSumOfDigits(A){
    let sum = 0;
    let digits = A.toString().split('');
    for(let digit of digits){
        sum += parseInt(digit);
    }
    return sum;
}

//Time Complexity of bruteForceSumOfDigits: O d
//Space Complexity of bruteForceSumOfDigits: O d




//  1---------------------------------------------------------------------------------------------



//Page 2