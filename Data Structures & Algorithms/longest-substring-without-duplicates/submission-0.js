class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // Sliding Window + 2 Pointer Approach

    lengthOfLongestSubstring(s) {
        if(s === null || s.length ===0){
            return 0
        }

        if(s.length ===1) return 1;

        let right = 0;
        let left = 0;
        let answer = 0

        const hashSet = new Set();

        while(right < s.length){

            while(hashSet.has(s[right])){
               hashSet.delete(s[left]);
               left++
            }

            hashSet.add(s[right]);
            answer = Math.max(answer, right-left+1);
            right++
        }

return answer
    }
}
