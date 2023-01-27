let nums=[12,14,5,7];
let sum=0;
//la suma elementos que no sean múltiplos de 7
for (let i=0;i<nums.length;i++){
    if (i%7==0){
        sum += nums[i];
    }
}
//imprimir sum
console.log(sum);