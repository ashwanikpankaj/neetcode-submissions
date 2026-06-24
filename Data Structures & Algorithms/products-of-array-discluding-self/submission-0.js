class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const answerArr = new Array(nums.length).fill(1);
        let prefix = 1;
        let postFix = 1

        for (let i = 0;  i < nums.length; i++){
          answerArr[i] = prefix;
          prefix = nums[i] * prefix
        }

       for(let i = nums.length -1 ; i >= 0; i-- ){
           answerArr[i] = postFix *  answerArr[i] 
           postFix = postFix * nums[i]
       }

       return answerArr
    }
}
