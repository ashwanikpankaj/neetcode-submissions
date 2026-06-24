class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
     const n = nums.length;
     const result = new Array(n);
     result[0] = 1;
     for(let i = 1; i < nums.length; i++){
        result[i] = result[i-1] * nums[i-1];
     }

    let rightProduct = 1;
    for(let j = nums.length-1; j>=0; j--){
        result[j] =  result[j]  * rightProduct;
        rightProduct *= nums[j]
    }

    return result;
    }
}
