// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// module.exports = { generateRandomNumber };

function generatePassword(min, max) {
    let password = "";
    let length = Math.floor(Math.random() * (max - min + 1)) + min;
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const symbolsLength = symbols.length;
    for (var i = 0; i < length; i++) {
        password += symbols.charAt(Math.floor(Math.random() * symbolsLength));
    }
    return password;
}

module.exports = { generatePassword };