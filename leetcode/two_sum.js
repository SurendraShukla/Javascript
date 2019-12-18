/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var seen = [];
    for (const i in nums) {
        const otherNo = target-nums[i];
        if(seen[otherNo] !== undefined) {
            return [seen[otherNo], i];
        }
        seen[nums[i]] = i;
    }
};

var nums = twoSum([2, 7, 11, 15], 9);
console.log(nums);
