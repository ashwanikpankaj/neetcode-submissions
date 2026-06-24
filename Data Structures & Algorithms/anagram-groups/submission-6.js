class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
   groupAnagrams(strs) {
  const obj = {};

  for (let i = 0; i < strs.length; i++) {
    const arr = new Array(26).fill(0);
    const str = strs[i];

    for (let j = 0; j < str.length; j++) {
      const index = str.charCodeAt(j) - 97;
      arr[index] += 1;
    }

    const key = arr.join("#");

    if (obj[key]) {
      obj[key].push(str);
    } else {
      obj[key] = [str];
    }
  }

  return Object.values(obj);
}

}
