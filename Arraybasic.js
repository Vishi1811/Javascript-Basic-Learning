arr=[1,2,3,4,5]//array intilization
arr[2]//accessing element at index 2
console.log(arr);//printing whole array
arr.push(6)//adding 6 at the end of array
arr.push(7);
arr.pop()//deleting last element of the array
arr.unshift(10)// adding element at the 0 index and shift right all element by 1 index
arr.unshift(0);
arr.shift();// remove element at 0 index and shift element left by 1 index
console.log(arr)
arr.shift()
console.log(arr.includes(6))// return true if array has 6  else return false
console.log(arr.indexOf(6))//return index of 3 if it exist in array otherwise return -1;
newarry=arr.join()//convert array object  into string
console.log(newarry);
console.log(arr);
console.log(typeof(newarry));
console.log(typeof(arr));
//<----------slice vs splice-----------> 
slicearry=arr.slice(1,4);
console.log(arr)
console.log(slicearry);
splicearry=arr.splice(1,4);
console.log(arr)
console.log(splicearry)
// <--------slice():--------->
// The slice() method in JavaScript extracts a section of an array and returns a new array containing the selected elements, without modifying the original array. Range 0 to n(size of array) where n is exclusive

// <--------splice():--------->
// The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place, modifying the original array.Range 0 to n(size of array) where n is inclusive.