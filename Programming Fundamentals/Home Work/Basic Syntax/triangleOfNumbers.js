function solveTriangleNumbers(arg){

    let n = arg;
    let output = '';

    for(let i = 1; i <= n; i++){
        let countar = 0;
        while(countar < i){

            output += `${i} `;
            countar++;
        }
        console.log(output);
        output = '';
    }


}