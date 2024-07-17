const repeatString = function(string,num) {
    hola = string
    if(num==0) {
        return ""
    }
    if(num<0) {
        return "ERROR"
    }
    else {
    while(num>1) {
        string = string + hola
        num--;
    }
    return string
}
};

// Do not edit below this line
module.exports = repeatString;
