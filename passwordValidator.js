function passwordValidator(password){

    let isValidPass = true;
    let isInvalidLength = password.length < 6 || password.length > 10;

    if (isInvalidLength) {
        isValidPass = false;
        console.log("Password must be between 6 and 10 characters")
    }

    let isOnlyLettersAndDigits = true;
    let digitsCounter = 0;

    for(let index = 0; index < password.length; index++){
        let currentCode = password.charCodeAt(index);
        let isNotNumber = currentCode < 48 || currentCode > 57;
        let isNNumber = currentCode >= 48 && currentCode <= 57;
        let isNotSmallLetter = currentCode < 97 || currentCode > 122;
        let isNotBigLetter = currentCode < 65 || currentCode > 90;
    
        if (isNNumber) {
            digitsCounter++
        }

        if (isNotNumber && isNotSmallLetter && isNotBigLetter) {
            isValidPass = false;
            isOnlyLettersAndDigits = false;
        }
    }

        if (!isOnlyLettersAndDigits) {
            console.log("Password must consist only of letters and digits");
        }

        if (!(digitsCounter >= 2)) {
            console.log("Password must be between 6 and 10 characters")
        }

        if (isValidPass) {
            console.log("Password is valid")
        }


}
passwordValidator('logIn')