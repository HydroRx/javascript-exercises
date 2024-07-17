const reverseString = function(string) {
    counter = string.length
    revstring = ''
    while(counter>0) {
        revstring = revstring+string.slice(-1)
        string=string.slice(0,-1)
        counter--;
    }

    return revstring
};

// Do not edit below this line
module.exports = reverseString;
