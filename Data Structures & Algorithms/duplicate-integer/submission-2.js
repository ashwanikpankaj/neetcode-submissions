class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //    const obj = {}
    //    for(let i = 0; i< nums.length; i++){
    //        if(obj[nums[i]] === undefined){
    //         obj[nums[i]] = 1
    //        }else{
    //         return true
    //        }
    //    } 

    //    return false
    // }

    hasDuplicate(nums){
        const set = new Set()
        for(let i = 0; i < nums.length; i++){
            if(set.has(nums[i])) return true
            else{
                set.add(nums[i])
            }
        }
        return false
    }
}
