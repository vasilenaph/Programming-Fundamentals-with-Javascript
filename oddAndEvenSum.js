function oddAndEvenSum(number){

    let numAsString = number.toString();

    let oddSum = 0;
    let evenSum = 0;
    let numAsStringLength = numAsString.length;

    for(let index = 0; index < numAsStringLength; index++) {
        
        let currentNummber = Number(numAsString[index]);

        if (currentNummber % 2 === 0){
            evenSum += currentNummber;
        }
        else {
            oddSum += currentNummber;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

}
console.log(oddAndEvenSum(1000435))