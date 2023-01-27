let nums = [12, 3, 5, 7];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0) {
        sum += nums[i];
    }
}

console.log(sum);
