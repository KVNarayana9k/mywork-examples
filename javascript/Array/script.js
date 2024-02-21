var arr=[11,92,35,47,50,61,9]
console.log(arr.length);
arr[2]=10
console.log(arr)
//another way//
var arr2=new Array(8)//thise is empty array//
console.log(arr2)
//array methods//
console.log(arr)
//push// last add
arr.push(123,148,139)
console.log(arr)
//pop// last deleted
arr.pop()
arr.pop()
console.log(arr)
//unshift//1st add
arr.unshift(7,3,8,5,9)
console.log(arr)
//shift//1st delet
arr.shift()
arr.shift()
console.log(arr)
//splice(s..index,d,a)//
arr.splice(5,10,143,168,177)
console.log(arr)