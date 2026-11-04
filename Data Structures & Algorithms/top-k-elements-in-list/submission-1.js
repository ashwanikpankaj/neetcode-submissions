class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // topKFrequent(nums, k) {}

topKFrequent = (nums, k) => {
  const map = new Map();

  // Step 1: Count the frequency of each number
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Step 2: Create buckets to avoid sorting by frequency
  const buckets = Array.from(
    { length: nums.length + 1 },
    () => []
  );

  // Step 3: Group numbers by frequency
  for (const [num, freq] of map) {
    buckets[freq].push(num);
  }

  // Step 4: Collect K most frequent elements
  const result = [];

  for (let i = buckets.length - 1; i >= 1; i--) {
    for (const num of buckets[i]) {
      result.push(num);

      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
};
}
