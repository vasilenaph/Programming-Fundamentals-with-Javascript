function triangleOfNumbers(number) {

    let result = '';

    for (let rows = 1; rows <= number; rows++) {
        for (cols = 1; cols <= rows; cols++) {
            result += `${rows} ` 
        }
        console.log(result)
        result = '';
    }

}
triangleOfNumbers(3)