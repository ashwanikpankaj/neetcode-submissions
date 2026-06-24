class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    // Brute Force Approach can be done by taking three loops


   twoSum(arr, i, result){
    let left = i+1;
    let right = arr.length -1;

    while(left < right){
        const sum = arr[i] + arr[left] + arr[right];

        if(sum > 0){
            right--

        }
        else if(sum < 0){
            left++;
        }
        else{
            result.push([arr[i], arr[left], arr[right]]);
            left++; right--;
            while(left < right && arr[left] === arr[left-1]){
                left++
            }
        }
    } 
   }

// Lets go by two pointer approach
    threeSum(nums) {
        const sortedNumArr = nums.sort((a,b)=> a - b);
        const result  = []

        for(let i = 0; i < sortedNumArr.length && sortedNumArr[i] <=0; i++){

            if(i == 0 || sortedNumArr[i] !== sortedNumArr[i-1]){
                this.twoSum(sortedNumArr, i, result)
            }
        }
      
      return result
    }
}
