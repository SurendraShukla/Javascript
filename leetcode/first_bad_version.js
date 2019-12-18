/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;

        while(true) {
            let range = end - start;
            if (range <= 100) {
                for (let i=start; i<=end; i++) {
                    if(isBadVersion(i)) {
                        return true;
                    }
                }
                return false;
            }

            let midPoint = end-Math.floor(range / 2);
            if (isBadVersion(midPoint)) {
                end = midPoint;
            }else{
                start = midPoint;
            }
        }
    };

};

badVersion = function(no) { return (no>=4) ? true : false; }
var isBadVersion = solution(badVersion);
console.log(isBadVersion(3));
console.log(isBadVersion(5));
console.log(isBadVersion(4));
