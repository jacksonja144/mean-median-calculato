const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

console.log("Enter integers to calculate their mean and median. Type 'q' to quit.");

// Function to calculate mean
function calculateMean(nums) {
    const sum = nums.reduce((total, number) => total + number, 0);
    return sum / nums.length;
}

// Function to calculate median
function calculateMedian(nums) {
    nums.sort((a, b) => a - b);
    const midIndex = Math.floor(nums.length / 2);
    if (nums.length % 2 === 0) {
        return (nums[midIndex - 1] + nums[midIndex]) / 2;
    } else {
        return nums[midIndex];
    }
}

rl.on('line', function(input) {
    if (input === 'q') {
        if (numbers.length > 0) {
            const mean = calculateMean(numbers);
            const median = calculateMedian(numbers);
            console.log(`Mean: ${mean}`);
            console.log(`Median: ${median}`);
        } else {
            console.log("No numbers entered.");
        }
        rl.close();
    } else {
        const number = parseInt(input);
        if (isNaN(number)) {
            console.log("Invalid input. Please enter a valid integer.");
        } else {
            numbers.push(number);
        }
    }
});
