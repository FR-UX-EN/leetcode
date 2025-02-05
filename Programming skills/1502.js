/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if(arr.length === 2){
        return true;
    }
    arr.sort((a,b) => a-b);

    for(let i=0; i<arr.length-2; i++){
        const left = arr[i];
        const center = arr[i+1];
        const right = arr[i+2];

        const calculatedCenter = (left + right) / 2;
        if(calculatedCenter !== center){
            return false;
        }
    }
    return true;
};