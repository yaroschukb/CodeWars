/*A list of integers is sorted in “Wave” order if alternate items are not less than their immediate neighbors 
(thus the other alternate items are not greater than their immediate neighbors).
Thus, the array [4, 1, 7, 5, 6, 2, 3] is in Wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.
The wave-sorted lists has to begin with an element not less than the next, so [1, 4, 5, 3] is not sorted in Wave because 1 < 4
Your task is to implement a function that takes a list of integers and sorts it into wave order in place; your function shouldn't return anything.

Note:
  The resulting array shouldn't necessarily match anyone in the tests, a function just checks if the array is now wave sorted.
*/


function waveSort(arr){
	arr = arr.sort(function(a, b){return b - a});

	for (var i = 1; i < arr.length; i += 2) {
		if (arr[i-1] < arr[i]) {
			let temp = arr[i];
			arr[i] = arr[i-1];
			arr[i-1] = temp;
		}
		if (i+1 < arr.length && arr[i+1] < arr[i]) {
			temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}
	}
	return arr;
}


let arr=[1,2,32,22,45,74,84,34,54,323,565,4333];

/* !!!!!!!!!!!!!!!!!!!!! 
For a better understanding I recommend the video:
	1) https://www.youtube.com/watch?v=U_Jz-v4_Tms;
	2) https://www.youtube.com/watch?v=8oR5OBW5buk&t=94s;*/