const removeFromArray = function(arr, ...inputs) {
    for (const input of inputs){
        for(let i=arr.length-1; i>=0;i--){
            if(arr[i]===input) {
                arr.splice(i, 1);
            }
        } 
    }
        console.log(arr)
        return arr;

   
};

// Do not edit below this line
module.exports = removeFromArray;
