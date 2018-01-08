console.log(sum(process.argv.slice(2)));

function sum(nums) {
  return nums.reduce((sum, num) => sum + Number(num), 0);
}