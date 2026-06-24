class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * 
     * 
     */


    // Brute Force Approach --> reverse the string and compare it with the  current string 
    // if equal then it is palindrome
isPalindrome(s) {
    const lowerCaseString = s.toLowerCase();
    let stringAfterNonAlphaRemoval = "";
    
    for (let i = 0; i < lowerCaseString.length; i++) {
        const charCodeIndex = lowerCaseString.charCodeAt(i);

        if (
            (charCodeIndex >= 97 && charCodeIndex <= 122) ||  // letters
            (charCodeIndex >= 48 && charCodeIndex <= 57)      // numbers
        ) {
            stringAfterNonAlphaRemoval += lowerCaseString[i];
        }
    }

    // Two pointer check
    let i = 0;
    let j = stringAfterNonAlphaRemoval.length - 1;

    while (i < j) {
        if (stringAfterNonAlphaRemoval[i] !== stringAfterNonAlphaRemoval[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

}
