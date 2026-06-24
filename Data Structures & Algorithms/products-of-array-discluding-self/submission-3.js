class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
   //   */
   //  productExceptSelf(nums) {
   //  const n = nums.length;
   //  let result = new Array(n);
   //  result[0] = 1;

   //   for(let i = 1;  i < n; i++){
   //      result[i] = result[i-1] * nums[i-1];
   //   } 

   //   // Keep rightProduct values
   //   let rightProduct = 1;

   //   for(let j = n-1; j >= 0; j--){
   //      result[j] = result[j] * rightProduct
   //      rightProduct *= nums[j]
   //   }
   //   return result;
   //  }

   productExceptSelf(nums){
    const result = [];

    result[0] = 1;

    for(let i = 1; i < nums.length; i++){
        result[i] = result[i-1] * nums[i-1];
    }

    let rightProduct = 1;

    for(let i = nums.length-1; i >=0; i--){
       result[i] = rightProduct * result[i];
       rightProduct*= nums[i]
    }  

    return result;
   }
}
