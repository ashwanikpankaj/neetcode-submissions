class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {


       // first setup a lookup array and then store in set 
        const set = new Set(nums);
         
         // lets start counting the numbers
         let maxLength = 0;

         for(const num of set){
            // here pre number doesn't exist in that case only start counting;
            if(!set.has(num-1)){
              
              let currentNum = num;
              let currentLength = 1;
            
            // as long as in set consecutive number exists, we should keep on counting
              while(set.has(currentNum+1)){
                currentNum++;
                currentLength++;
              }
            maxLength = Math.max(maxLength, currentLength)
            }

       
         }

         return maxLength;
    }
}
