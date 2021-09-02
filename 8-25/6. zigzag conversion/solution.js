/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * [1, 2, 3, 4, 5, 7, 8, 9, 12, 23] -> "1-5, 7-9, 12, 23"
 */
var convert = function(s, numRows) {

var length = s.length;
if (numRows == 1) return s;
var clen = numRows * 2 - 2;
var zigArray = [];
for (var i = 0; i < numRows; i++){
    for (var j = 0; j + i < length; j=j+clen){
        zigArray.push(s.charAt(j + i));
        if (i!=0 && i!=numRows -1 && j + clen - i < length){
            zigArray.push(s.charAt(j + clen - i));
        }
    }
}

return zigArray.join("");
};
