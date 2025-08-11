function reverseString(str) {
    // base case
    if (str.length <= 1) {
        return str;
    }
    // recursive relationship
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("reallylongstring"));
