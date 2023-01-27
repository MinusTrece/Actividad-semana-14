let nums=[10,50,8,4];
//0
let sum=0;
//sumar los elementos impares
for (let i=0; i<nums.length; i++){
    if (nums[i]%2 !==0)
    {
        sum +=nums[i]
    }
}
//imprimar
console.log(sum)
