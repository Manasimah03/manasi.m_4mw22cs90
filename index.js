function findMax(numbers) {
    if (numbers.length === 0) {
        return null;
    }
let maxNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
return maxNumber;
}
let numbersArray = [3, 5, 7, 2, 8, -1, 4, 10, 12];
let maxNumber = findMax(numbersArray);
console.log("The maximum number is: " + maxNumber);