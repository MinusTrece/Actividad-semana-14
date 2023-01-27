let nums=[1,1,0,0]
let sum=0
//la suma de los índices donde el elemento es 0
for (let i=0; i<nums.length; i++){
    if (nums[i]===0){
        sum +=i;
    }
}
//imprimir la variable sum
console.log(sum)