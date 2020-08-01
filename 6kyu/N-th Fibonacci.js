/*I love Fibonacci numbers in general, but I must admit I love some more than others.
I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2

Because 2 is the 4th number in the Fibonacci Sequence.
For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/

// first solution. !!! not effective for large values of n !!!;
function nthFibo(n){
 return n<=1?n:nthFibo(n-1)+nthFibo(n-2);
}



// second more effective solution

function nthFibo(n){
    if(n===0){return n;}
    let a=1;
    let b=1;
    for(let i=3; i<=n; i++){
        let c=a+b;
        a=b;
        b=c;
    }
    return n===0?n:b;
}


/*For a better understanding I recommend the video !!!!!!! https://www.youtube.com/watch?v=UxICsjrdlJA !!!!!!!!*/
 