function solveAddOrSubtract(inputArr1, inputArr2){

    let firstArr = inputArr1;
    let secondArr = inputArr2;

    for(let elementOne of firstArr){
        for(let elementTwo of secondArr){

            if(elementOne === elementTwo){
                console.log(elementOne);
            }
        }
    }

}