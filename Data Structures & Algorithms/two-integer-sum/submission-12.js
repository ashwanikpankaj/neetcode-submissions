class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {}
        const result = [];

        for(let i = 0; i < nums.length;  i++){
            const remaining= target-nums[i]
            if(obj[remaining] === undefined){
                obj[nums[i]] = i;
            }else{
                console.log('hello line 16',obj[nums[i]], i)
              result.push(obj[remaining])
               result.push(i)
            }
      
        }

        console.log('hello line 22', result, obj)
         return result
    }
}

