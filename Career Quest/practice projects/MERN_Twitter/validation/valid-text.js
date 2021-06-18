const validText = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
}
//trim removes whitespace from both ends of the string


module.exports = validText;