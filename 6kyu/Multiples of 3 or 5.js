/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: "If the number is a multiple of both 3 and 5, only count it once."*/

// first solution 06.03.2020
/*function solution (number){
	let arr=[];
	for (let i=0; i<number; i++){
	    if(i%3===0||i%5===0){
	        arr.push(i);
	    }
	    else return arr;
	}
   return arr.reduce((a,b)=>a+b)||0;
}*/

//second solution 06.03.2020

/*function solution(number){
    let result=0;
    for(let i=0; i<number; i++){
        if(i%3===0||i%5===0){
	        result+=i;
	    }
    }
    return result;
}*/


//third solution 15.04.2020

function solution(number){
  return number < 1 
  ? 0 : [...new Array(number)
	.keys()]
	.filter(n => n % 3 == 0 || n % 5 == 0)
	.reduce((a, b) => a + b);
}
