function magicSum(inputArr, num) {

    let n = inputArr.length;

    let firstNum = 0;
    let secondNum = 0;


    for (let index = 0; index < n; index++) {

        firstNum = inputArr[index];

        for (let i = index + 1; i < n; i++) {

            secondNum = inputArr[i];

            if ((firstNum + secondNum) == num) {

                console.log(`${firstNum} ` + `${secondNum}`);
               
            }

        }

    }


}