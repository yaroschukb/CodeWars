/*You're working in a number zoo, and it seems that one of the numbers has gone missing!
Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.
In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.
Task:
  Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). 
  Return this missing number.

Note: huge lists will be tested.

Examples:

[1, 3, 4]  =>  2
[1, 2, 3]  =>  4
[4, 2, 3]  =>  1*/


function findNumber(array){
  array.sort(function(a,b){return a-b});
  const missing = [];
  if (array.length===array[array.length-1]){
  missing.push( array.length+1);
}
  else if(array.length === 0){
    return "chai";
  }
  for(let i=1; i<array.length-1; i++)
  
   if(array.indexOf(i)<0){
     missing.push(i);
   } 
   
  return missing;
  
}


function findNumber(array){
  let total = Array.from({length:array.length+1},(x,i)=>i+1).reduce((a,b)=>a+b,0)
  return total - array.reduce((a,b)=>a+b,0)
}