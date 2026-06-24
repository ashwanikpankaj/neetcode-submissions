class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */

    // Think of binary search also for logn --> worst case nlogn
    // twoSum(numbers, target) {
    //     let i = 0;
    //     let j = numbers.length-1;

    //     while(i<j){
    //         const sum = numbers[i] +numbers[j] 
    //         if(sum > target){
    //             j = j-
    //         }else if(sum < target){
    //             i = i+1;
    //         }else{
    //             return [i+1, j+1]
    //         }
    //     }
    // }

    twoSum(numbers, target){
        const n = numbers.length;
        let i = 0;
        let j = n-1;

        while(i < j){
            if(numbers[i] + numbers[j] === target){
                return [i+1, j+1];

            }

            else if(numbers[i] + numbers[j]  > target){
                j--;
            }
            else if(numbers[i] + numbers[j]  < target){
                i++
            }
        }
    }


}
