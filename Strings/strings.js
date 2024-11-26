//Page 1



//1. Toggle Case


// 1-----------------------------------------------------------------

function bruteForceToggleCase(A){
    let result = '';
    for(let i = 0; i < A.length; i++){
        const char = A[i];
        if(char >= 'a' && char <= 'z'){
            result += char.toUpperCase();
        }
        else if(char >= 'A' && char <= 'Z'){
            result += char.toLowerCase();
        }
    }
    return result;
}

//Time Complexity of bruteForceToggleCase: O N^2 (due to string concatenation) 
//Space Complexity of bruteForceToggleCase: O N

function bruteForce2ToggleCae(A){
    const result = new Array(A.length);
    for(let i = 0; i < A.length; i++){
        const char = A[i];
        if(char >='a' && char <= 'z'){
            result[i] = char.toUpperCase();
        }
        else if(char >='A' && char <= 'Z'){
            result[i] = char.toLowerCase();
        }
    }
    return result.join('');
}

//Time Complexity of bruteForce2ToggleCase: O N
//Space Complexity of bruteForce2ToggleCase: O N

function splitMapJoinToggleCase(A){
    return A.split('').map(char =>
    char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    ).join('');
}

//Time Complexity of splitMapJoinToggleCase: O N 
//Space Complexity of splitMapJoinToggleCase: O N

function asciiToggleCase(A){
    const result = [];
    for(let i = 0; i < A.length; i++){
        const charCode = A.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90){
            result.push(String.fromCharCode(charCode + 32));
        }
        else if (charCode >= 97 && charCode <= 122){
            result.push(String.fromCharCode(charCode - 32));
        }
    }
    return result.join('');
}

//Time Complexity of asciiToggleCase : O N
//Space Complexity of asciiToggleCase: O N


// 1-----------------------------------------------------------------



//2. Reverse the string Character by Character

// 2-----------------------------------------------------------------

function bruteForceReverseCByC(A){
    let result = '';
    for(let i = A.length - 1; i >= 0; i--){
        result += A[i];
    }
    return result;
}

//Time Complexity of bruteForceReverseCByC : O N^2
//Space Complexity of bruteForceReverseCByC : O N

function bruteForce2ReverseCByC(A){
    const result = [];
    for(let i = A.length - 1; i >= 0; i--){
        result.push(A[i]);
    }
    return result.join('');
}

//Time Complexity of bruteForce2ReverseCByC : O N
//Space Complexity of bruteForce2ReverseCByC : O N

function splitReverseJoinReverseCByC(A){
    return A.split('').reverse().join('');
}

//Time Complexity of splitReverseJoinReverseCByC : O N
//Space Complexity of splitReverseJoinReverseCByC : O N

function twoPointerReverseCByC(A){
const charArray = A.split('');
let start = 0;
let end = charArray.length - 1;
while(start < end){
    const temp = charArray[start];
    charArray[start] = charArray[end];
    charArray[end] = temp;
    start++;
    end--;
}
return charArray.join('');
}

//Time Complexity of twoPointerReverseCByC: O N
//Space Complexity of  twoPointerReverseCByC: O N

function stackReverseCByC(A){
    const stack = [];
    for(let i = 0; i < A.length; i++){
        stack.push(A[i]);
    }
    const resultArray = [];
    while(stack.length > 0){
        resultArray.push(stack.pop());
    }
    return resultArray.join('');
}

//Time Complexity of stackReverseCByC: O N
//Space Complexity of stackReverseCByC: O N

// 2-----------------------------------------------------------------






//3. Reverse the String word by word

// 3-----------------------------------------------------------------

function bruteForceReverseWByW(A){
    const words = A.split(' ').filter(word => word.length > 0);
    return words.reverse().join(' ');
}

//Time Complexity of bruteForceReverseWByW: O N
//Space Complexity of bruteForceReverseWByW: O N


function iterativeReverseWByW(A){
    let result = [];
    let word = [];
    let n = A.length;

    for(let i = 0; i < n; i++){
        if(A[i] === ' '){
            if(word.length > 0){
                result.push(word.join(''));
                word = [];
            }
        }
            else{ 
                word.push(A[i]);
            }
            }

            if(word.length > 0){
                result.push(word.join(''));
            }
            return result.reverse().join(' ');

}

//Time Complexity of iterativeReverseWByW : O N
//Space Complexity of iterativeReverseWByW : O N 


function trimSplitReverseJoinReverseWByW(A){
    const words = A.trim().split(/\s+/);
    return words.reverse().join(' ');
}


//Time Complexity of trimSplitReverseJoinReverseWByW : O N
//Space Complexity of  trimSplitReverseJoinReverseWByW  : O N


// 3-----------------------------------------------------------------






//4. Longest Palindromic Substring

// 4-----------------------------------------------------------------

function bruteForceLongestPal(A){
    let n = A.length;
    let longest = [];

    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            let substring = [];
            for(let k = i; k <= j; k++){substring.push(A[k]);}

            if(isPalindrome(substring) && substring.length > longest.length){
                longest = substring;
            }
        }
    }
    return longest.join('');
}

function isPalindrome(substring){
    let start = 0;
    let end = substring.length - 1;

    while(start < end){
        if(substring[start] !== substring[end]){return false;}
        start++;
        end--;
    }
    return true;
}

//Time Complexity of bruteForceLongestPal : O N^4
//Space Complexity of bruteForceLongestPal O N

function bruteForce2LongestPal(A){
    let n = A.length;
    let longest = [];

    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(isPalindrome(A, i, j) && (j - i + 1) > longest.length){
                longest = [];
                for(let k = i; k <= j; k++){longest.push(A[k]);}
            }
        }
    }
    return longest.join('');
}

function isPalindrome(A, i, j){
    while(i < j){
        if(A[i] !== A[j]){return false;}
        i++;
        j--;
    }
    return true;
}

//Time Complexity of bruteForce2LongestPal : O N^3
//Space Complexity of bruteForce2LongestPal : O N

function expandCenterLongestPal(A){
    let n = A.length;
    let start = 0, maxLength = 0;

    for(let i = 0; i < n; i++){
        expandTrack(A, i, i);
        expandTrack(A, i, i+1);
    }

    function expandTrack(A, left, right){
        while(left >= 0 && right < n && A[left] === A[right]){
            left--;
            right++;
        }
        let length = right - left -1;
        if(length > maxLength){
            start = left + 1;
            maxLength = length;
        }
    }

    return A.slice(start, start + maxLength);
}

//Time Complexity of expandCenterLongestPal: O N^2
//Space Complexity of expandCenterLongestPal: O N


function dpLongestPal(A){
    let n = A.length;
    let dp = Array.from({length: n}, () => Array(n).fill(false));
    let start = 0, maxLength = 1;

    for(let i = 0; i < n; i++){dp[i][i] = true;}
    for(let i = 0; i < n-1; i++){
        if(A[i] === A[i+1]){
            dp[i][i+1] = true;
            start = i;
            maxLength = 2;
        }
    }

    for(let length = 3; length <= n; length++){
        for(let i = 0; i <= n-length; i++){
            let j = i + length -1;
            if(A[i] === A[j] && dp[i+1][j-1]){
                dp[i][j] = true;
               if(length > maxLength){
                start = i;
                maxLength = length;
               }
            }
        }
    }
    return A.slice(start, start + maxLength);
}

//Time Complexity of dpLongestPal : O N^2
//Space Complexity of dpLongestPal : O N ^2

function manacherLongestPal(A){
    const transformed = '#' + A.split('').join('#') + '#';
    const n = transformed.length;
    const P = Array(n).fill(0);
    let C = 0, R = 0;

    for(let i = 0; i < n; i++){
        let mirror = 2*C-i;
        if(i < R){P[i] = Math.min(R - i, P[mirror]);}
        let left = i - (P[i] + 1), right = i + (P[i] + 1);

        while(left >= 0 && right < n && transformed[left] === transformed[right]){
            P[i]++;
            left--;
            right++;
        }
        if(i + P[i] >  R){
            C = i;
            R = i + P[i];
        }
    }

    let maxLength = 0, centerIndex = 0;
    for(let i = 0; i < n; i++){
        if(P[i] > maxLength){
            maxLength = P[i];
            centerIndex = i;
        }
    }

    const start = Math.floor((centerIndex - maxLength)/2);
    return A.slice(start, start+ maxLength);
}


//Time Complexity of manacherLongestPal : O N
//Space Complexity of manacherLongestPal : O N


// 4-----------------------------------------------------------------


// 5. String Operations


// 5-----------------------------------------------------------------

function bruteForceStringOperation(A){
    let concatenated = A + A;

    let noUpperCase = [];
    for(let char of concatenated){
        if(char >= 'a' && char <= 'z'){noUpperCase.push(char);}
    }

    let result = [];

    for(let char of noUpperCase){
        if('aeiou'.includes(char)){result.push('#');}
        else{result.push(char);}
    }

    return result.join('');

}

//Time Complexity of bruteForceStringOperation : O N
//Space Complexity of bruteForceStringOperation : O N


function bruteForce2StringOperation(A){
    let result = [];
    const vowels = new Set(['a','e','i','o','u']);
    for(let char of A+A){
        if(char >= 'a' && char <= 'z'){
            result.push(vowels.has(char) ? '#' : char);
        }
    }
    return result.join('');
}

//Time Complexity of bruteForce2StringOperation: O N
//Space Complexity of bruteForce2StringOperation: O N

function inplaceStringOperation(A){
let arr = [...A];
const n = A.length;
const vowels = new Set(['a','e','i','o','u']);
let writeIndex = 0;

for(let i = 0; i < 2 *n; i++){
    let char = A[i % n];
    if(char >= 'A' && char <= 'Z'){continue;}

    arr[writeIndex] = vowels.has(char) ? '#' : char;
    writeIndex++;
}
return arr.slice(0, writeIndex).join('');
}

//Time Complexity of inplaceStringOperation : O N
//Space Complexity of inplaceStringOperation : O N



// 5-----------------------------------------------------------------


//Page 1



//********************************************************************************************** */


//Page 2


//1. Longest Common Prefix

// 1-----------------------------------------------------------------

function bruteForceLcp(A){
if(!A.length){return "";}
let prefixLength = A[0].length;

for(let i = 1; i < A.length; i++){
    let j = 0;
     while(j < prefixLength && j < A[i].length && A[0][j] === A[i][j]){
        j++;
     }
     prefixLength = j;
     if(prefixLength === 0){break;}
}
return A[0].slice(0, prefixLength);
}

//Time Complexity of bruteForceLcp: O n * m
//Space Complexity of bruteForceLcp: O 1

function verticalScanLcp(A){
    if(!A.length){return "";}

    let prefixLength = A[0].length;

    for(let i = 0; i < prefixLength; i++){
        const char = A[0][i];
        for(let j = 1; j < A.length; j++){
            if(i >= A[j].length || A[j][i] !== char){
                return A[0].substring(0, i);
            }
        }
    }
    return A[0].substr(0, prefixLength);
}

//Time Complexity of verticalScanLcp: O n * m
//Space Complexity of verticalScanLcp: O 1


function splitHalfLcp(A){
    if(A.length === 0){return "";}

    function findLcp(left, right){
        if(left === right){return A[left];}
        const mid = Math.floor((left + right)/ 2);
        const leftLcp = findLcp(left, mid);
        const rightLcp = findLcp(mid+1, right);
        return commonPrefix(leftLcp, rightLcp);
    }

    function commonPrefix(s1, s2){
        let i = 0;
        while(i < s1.length && i < s2.length && s1[i] === s2[i]){
            i++;
        }
        return s1.substring(0, i);
    }
    return findLcp(0, A.length -1);
}

//Time Complexity of splitHalfLcp: O N * M * logN
//Space Complexity of splitHalfLcp: O log N

function binarySearchLcp(A){
    if(A.length === 0 ){return "";}
    let low = 1; 
    let high = A[0].length;
    let prefixLength = 0;

    while(low <= high){
        const mid = Math.floor((low+ high)/2);
        if(commonPrefix(A, mid)){
            prefixLength = mid;
            low = mid+ 1;
        }else{
            high = mid -1;
        }
    }
return A[0].slice(0, prefixLength);
}

function commonPrefix(A, len){
    for(let i = 1; i < A.length; i++){
        for(let j = 0; j < len; j++){
            if(j >= A[i].length || A[0][j] !== A[i][j]){
                return false;
            }
        }
    }
    return true;
}

//Time Complexity of binarySearchLcp: O N * M * logM
//Space Complexity of binarySearchLcp: O 1


// 1-----------------------------------------------------------------


//2. Isalnum()

// 2-----------------------------------------------------------------

function bruteForceIsAlpha(A){
    for(let i = 0; i < A.length; i++){
        let char = A[i];
        if(!(('a'<= char && char <= 'z') ||
         ('A' <= char && char <= 'Z')  || 
         ('0' <= char && char <= '9'))){
            return 0;
        }
    }
    return 1;
}

//Time Complexity of bruteForceIsAlpha: O N
//Space Complexity of bruteForceIsAlpha: O 1


function setIsAlpha(A){
    const validChars = new Set();
    for(let i = 0; i < 26; i++){
        validChars.add(String.fromCharCode(97+ i));
    }
    for(let i = 0; i < 26; i++){
        validChars.add(String.fromCharCode(65 + i));
    }
    for(let i = 0; i < 10; i++){
        validChars.add(String(i));
    }
    for(let i = 0; i < A.length; i++){
        if(!validChars.has(A[i])){return 0;}
    }
    return 1;
}

//Time Complexity of setIsAlpha: O N
//Space Complexity of setIsAlpha: O 1


// 2-----------------------------------------------------------------

//3.  Count Occurences

// 3-----------------------------------------------------------------

function bruteForceBob(A){
    let count = 0;
    for(let i = 0; i <= A.length - 3; i++){
        if(A[i] === 'b' && A[i+1] === 'o' && A[i+2] === 'b'){count++;}
    }
    return count;
}

//Time Complexity of bruteForceBob: O N
//Space Complexity of bruteForceBob: O 1

function slidingWindowBob(A){
    let count = 0;
    for(let i = 0; i < A.length-2; i++){
        if(A[i] === 'b' && A[i+1] === 'o' && A[i+2] === 'b'){count++;}
    }
    return count;
}


//Time Complexity of slidingWindowBob: O N
//Space Complexity of slidingWindowBob: O 1

function countBob(A){
    let count = 0;
    let i = 0;
    while(i <= A.length -3){
        if(A[i] === 'b' && A[i+1] === 'o' && A[i+2 ] === 'b'){
            count++;
            i++;
        }
        else{i++;}
    }
    return count;
}

//Time Complexity of countBob: O N
//Space Complexity of countBob: O 1



// 3-----------------------------------------------------------------


// 4. Amazing Subarrays


// 4-----------------------------------------------------------------

function bruteForceSubstrings(A){
    const vowels = "aeiouAEIOU";
    const n = A.length;
    let count = 0;

    for(let i = 0; i < n; i++){
        if(vowels.includes(A[i])){
            for(let j = i; j < n; j++){
                count++;
            }
        }
    }
    return count % 10003;
}

//Time Complexity of bruteForceSubstrings: O N^2
//Space Complexity of bruteForceSubstrings: O 1

function bruteForce2Substrings(A){
    const vowels = "aeiouAEIOU";
    const n= A.length;
    let count = 0;

    for(let  i = 0; i < n; i++){
        if(vowels.includes(A[i])){
            count += (n-i);
        }
    }
    return count% 10003;
}


//Time Complexity of bruteForce2Substrings : O N
//Space Complexity of bruteForce2Substrings : O 1

function setSubstrings(A){
    const vowelSet = {
        'a': true, 'e': true,'i': true,'o': true,'u': true,
        'A': true,'E': true,'I': true,'O': true,'U': true,
    }
    const n = A.length;
    let count = 0;
    for(let i = 0; i < n; i++){
        if(vowelSet[S[i]]){
            count += (n - i);
        }
    }
    return count % 10003;
}

//Time Complexity of setSubstrings: O N
//Space Complexity of setSubstrings: O 1

function set2Substrings(A){
    const vowelSet = {
        'a': true, 'e': true,'i': true,'o': true,'u': true,
        'A': true,'E': true,'I': true,'O': true,'U': true,
    }

    const n = A.length;
    let count = 0;
    for(let i = 0; i < n; i++){
        if(vowelSet[A[i]]){
            count = (count + (n-i))% 10003;
        }
    }
return count;
}

//Time Complexity of set2Substrings: O N
//Space Complexity of set2Substrings: O 1

// 4-----------------------------------------------------------------



//Page 2

//********************************************************************************************** */