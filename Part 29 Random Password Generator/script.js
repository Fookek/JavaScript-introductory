function generatepass(length, lower, upper, numbers, symbols){

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%^&*()_+-="

    let allowedChars;
    let pass = "";

    allowedChars += lower ? lowercasechars : "";
    allowedChars += upper ? uppercasechars : "";
    allowedChars += numbers ? numberchars : "";
    allowedChars += symbols ? symbolchars : "";

    if(length <= 0){
        return "password must be at least 1 ";
    }
    if(allowedChars.length === 0){
        return "at least 1 set of characters needs to be enabled";
    }

    for(let i = 0; i < length; i++){
        pass += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    }

    return pass;
}


const passwordlength = 10;
const includelower = true;
const includeupper = true;
const includenumbers = true;
const includesymbols = true;

const password = generatepass(passwordlength, includelower, includeupper, includenumbers, includesymbols);

console.log(`generated password: ${password}`);