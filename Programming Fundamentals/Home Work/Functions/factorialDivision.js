function factorialDevision(arg1, arg2){

    let num1 = arg1;
    let num2 = arg2;

    let numberFactorial1 = num1;
    let numberFactorial2 = num2;

    for(let i = 1; i < num1; i++){

        numberFactorial1 *=  (num1 - i);
    }

    for(let i = 1; i < num2; i++){

        numberFactorial2 *=  (num2 - i);
    }

    let result = numberFactorial1 / numberFactorial2;
    
    console.log(result.toFixed(2));
}