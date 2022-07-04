/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charUsedAt = new Map();
    let startingIndex = 0;
    let currentLength = 0;
    let maxLength = 0;
    let index = 0;
    
    while(index < s.length) {
        const char = s[index];
        
        if (charUsedAt.has(char) === false) {
            charUsedAt.set(char, index);
            currentLength++;
        } else {
            const prevIndex = charUsedAt.get(char);
            
            for (let i = startingIndex; i < prevIndex; i++) {
                charUsedAt.delete(s[i]);
            }
            
            charUsedAt.set(char, index);
            startingIndex = prevIndex + 1;
            currentLength = index - prevIndex;
        }
        
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
        
        index++;
    }
    
    return maxLength;
    
};