class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let concatedStr = ''
       for(let str of strs){
        concatedStr += str.length + "#" + str
       }

       return concatedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        let j = 0
        const resultArr = []

      while(i < str.length){
        j = i;
        while(str[j] !== "#"){ // this case what if strLenght is greater than one digit
          j++;
        }
          const length = parseInt(str.substring(i, j));
            const word = str.substring(j + 1, j + 1 + length);

        resultArr.push(word);
        i = j+1+length



      }

      return resultArr
      
    }
}
