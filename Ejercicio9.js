let nums=[0,2,1,4];
let sum=0;

for (let i=0;i<nums.length;i++){
    if (nums[i]>i){
        sum += nums[i];
    }
}
console.log(sum);