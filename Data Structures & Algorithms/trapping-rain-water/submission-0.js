class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right =  height.length-1;
        let leftMax = height[left];
        let rightMax =  height[right];
        let total = 0

        while(left < right){
          if(height[left] < height[right]){
            leftMax = Math.max(height[left], leftMax);

            if(leftMax - height[left] > 0){
                total = total+(leftMax-height[left]);
            }
                left++
          }
          else{
                rightMax = Math.max(rightMax, height[right])
                if(rightMax-height[right] > 0){
                    total = total + (rightMax-height[right]);
                }
                  right--
            }
           
        }
return total
        
    }
}
