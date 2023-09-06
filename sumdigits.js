function sumdigits(num) {

    let numAsString = num.toString();
    let sum = 0;

    for(i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    console.log(sum);



}
sumdigits(245678)