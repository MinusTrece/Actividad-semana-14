let nums=[2,1,4,3];
let sum=0;

for (let i=0;i<nums.length;i++){
    if (nums[i]===i){
        sum += nums[i];
    }
}
console.log(sum);