function calculator(num, operator, secNum) {

    let sum = 0;

    switch (operator) {
        case "+": sum = num + secNum; break;
        case "-": sum = num - secNum; break;
        case "*": sum = num * secNum; break;
        case "/": sum = num / secNum; break;
    }

    console.log(sum.toFixed(2));


}
calculator(5, '+', 10)