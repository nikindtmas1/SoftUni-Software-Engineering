function solve(inputArr) {

    let n = inputArr.length;

    let output = 'no';


    for (let index = 0; index < n; index++) {

        let leftSum = 0;
        let rightSum = 0;


        for (let leftIndex = 0; leftIndex < index; leftIndex++) {

            leftSum += inputArr[leftIndex];

        }

        for (let rightIndex = index + 1; rightIndex < n; rightIndex++) {

            rightSum += inputArr[rightIndex];
        }

        if (leftSum === rightSum) {

            output = index;

        }

    }

    console.log(output);

}