/*
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []

The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) 
will take as parameter a list ls and return a list of the sums of its parts as defined above.*/


function partsSums(ls) {

  let res=[0];//new array
  let l=ls.length-1;//array length

   for (let i=l; i>=0; i--){

     res.push(ls[i]+res[l-i]) 

 }
   
   return res.reverse()
}
