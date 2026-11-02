class Solution {

    /// Naive Approach will be take two loops and then check the sum for this
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(nums, target) {
    //     const obj = {}
    //     const result = [];

    //     for(let i = 0; i < nums.length;  i++){
    //         const remaining= target-nums[i]
    //         if(obj[remaining] === undefined){
    //             obj[nums[i]] = i;
    //         }else{
    //             console.log('hello line 16',obj[nums[i]], i)
    //           result.push(obj[remaining])
    //            result.push(i)
    //         }
      
    //     }
    //      return result
    // }

   twoSum(nums, target){
    const map = new Map();

    for(let i = 0; i<nums.length; i++){
        const rem = target - nums[i];

        if(map.has(rem)){
            return [map.get(rem), i]
        }else{
            map.set(nums[i], i)
        }
    }
  return [];
 
}
}
