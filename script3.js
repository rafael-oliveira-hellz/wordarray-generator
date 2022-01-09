'use strict'

const generateRandomWords = () => {
    let min = Math.ceil(1000);
    let max = Math.floor(100000);

    return (Math.floor(Math.random() * (max - min + 1)) + min).toString(16).replace(`/[^a-z]+/g, ''`);
}

const isPalindrome = () => {
    let count = 0

    for (let i = 0; i < 10000; i++) {
        let word = generateRandomWords();
        if (word === word.split('').reverse().join('')) {
            console.log('\n')
            console.log(word)
            console.log(word.split('').reverse().join(''))
            count++;
        }
    }
    console.log('\n')
    return count;
}

console.log(isPalindrome());