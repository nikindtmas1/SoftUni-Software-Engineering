function solveDivision(arg){

    let num = arg;
    let div = [2, 3, 6, 7, 10];
    let maxdiv = Number.MIN_SAFE_INTEGER;
    
    for(let i = div.length -1; i >= 0; i--){

        if(num % div[i] === 0){
            if(div[i] > maxdiv){
                maxdiv = div[i];
            }
        }
    }
    if(maxdiv > 0){

    console.log(`The number is divisible by ${maxdiv}`);

    }else{

        console.log('Not divisible');
    }
}