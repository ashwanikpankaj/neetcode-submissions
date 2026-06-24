class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    // Optimal Solution is by two pointer approach

    // Brute Force approach-> Think like -> two sum two loop approach

    // maxArea(heights) {
    //     let max = 0;
    //     let left = 0;
    //     let right = heights.length-1;

    //     while(left < right){
    //         const width  = right-left;
    //         const area = Math.min(heights[left], heights[right]) * width;
    //         max = Math.max(area, max);

    //         if(heights[left] <= heights[right] ){
    //             left++
    //         }else{
    //             right--;
    //         }
    //     }

    //     return max
    // }

    maxArea(heights){
        const n = heights.length;
        let i = 0; 
        let j = n-1;
        let maxWater = 0
        while(i < j){
         const area = (j-i)*Math.min(heights[i], heights[j]);

         maxWater = Math.max(area, maxWater);

         if(heights[i] > heights[j]){
              j--;
         }else if(heights[i] <= heights[j]){
            i++;
         }
        }

        return maxWater
    }
}
