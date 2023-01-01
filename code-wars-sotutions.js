// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution. 
// 1
function solution(number) {
    let sum = 0;      // initialized sum with the let variable and assigned it the value of 0.
    for (let i = 0; i < number; i++) {  // used a for loop to iterate through the number array.
        if (i % 3 === 0 || i % 5 === 0) { // created a condition to check if each element in the array is divisible by 3 or 5 with a remainder of 0
            sum += i;
        }
    }
    return sum;
}

// 2
function likes(names) {
    if (names.length === 0) {
        return "no one likes this";
    }
    else if (names.length === 1) {
        return `${names[0]} likes this`;
    }
    else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    }
    else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    else if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

// 3
function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]))
            return arr[i];
    }
}

// 4
function findOutlier(integers) {
    let even = integers.filter(elements => elements % 2 === 0);
    let odd = integers.filter(elements => elements % 2 !== 0);
    if (even.length === 1) {
        return even[0];
    }
    else if (odd.length === 1) {
        return odd[0];
    }
}


// 5
function duplicateCount(text) {
    let count = 0;
    let lower = text.toLowerCase();
    for (let i = 0; i < lower.length; i++) {
        if (lower.indexOf(lower[i]) === i && lower.lastIndexOf(lower[i]) !== i) {
            count += 1;
        }
    }
    return count;
}

// 6
function moveZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count += 1;
        }
    }
    let newArr = arr.filter(elements => elements !== 0);
    for (let i = 1; i <= count; i++) {
        newArr.push(0);
    }
    return newArr;
}

// 7
function pigIt(str) {
    return str.split(" ").map(elements => {
        if (elements.toLowerCase() !== elements.toUpperCase()) {
            return elements = elements.substring(1) + elements[0] + "ay";
        }
        else {
            return elements;
        }
    }).join(" ");
}
