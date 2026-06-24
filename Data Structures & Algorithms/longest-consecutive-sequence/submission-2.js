class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;

        const sortedNum = nums.sort((a, b)=> a-b);
        let longestSubsquence = 1;
        let curretSubsquence = 1;
        
        for(let i = 1; i < sortedNum.length; i++){
            if(sortedNum[i] - sortedNum[i-1] === 1){
                console.log('hello line 13', sortedNum[i], sortedNum[i-1] , sortedNum)
                curretSubsquence+= 1
            }
            else if(sortedNum[i] === sortedNum[i-1]) continue
            else{
                curretSubsquence = 1
            }
          longestSubsquence = Math.max(curretSubsquence, longestSubsquence)
            
        }

        return longestSubsquence
    }
}
