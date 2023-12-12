const arr = [10,20,30,40,50];
const target = 40;

for(i=0;i<arr.length;i++){  
let val = target - arr[i];  //60-i
if(arr.includes(val)){
console.log(val,arr[i])
}
}

