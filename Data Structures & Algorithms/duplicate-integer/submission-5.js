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
    let set = new Set();

    for(let num of nums){
        if(!set.has(num)){
            set.add(num)
        }else{
        return true

        }
    }
    return false;
    }
}
