let nums=[10,50,8,4]
let sum=0;
//sumar los valores mayores a 10
for (let i=0; i<nums.length; i++){
    if (nums[i]>10)
    {
        sum +=nums[i]
    }
}
//imprimar
console.log(sum)