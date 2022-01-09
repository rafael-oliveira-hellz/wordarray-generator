function createWordArray() {
    const wordArray = [];

    for (let i = 0; i < 10000; i++) {
        wordArray[i] = randomWord();
    }
    return wordArray;
}

function randomWord() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let wordLength = 3;
    let word = '';

    const wordLengthChance = Math.random();

    if (wordLengthChance > 0.333) {
        if (wordLengthChance > 0.666) {
            wordLength = 5;
        } else {
            wordLength = 4;
        }
    }

    for (let i = 0; i < wordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        word += characters.charAt(randomIndex);
    }

    return word;
}

function isPalindrome(word) {
    const wordLength = word.length;

    for (let i = 0; i < wordLength; i++) {
        if (word[i] !== word[wordLength - i - 1]) {
            return false;
        }
    }

    return true;
}

const wordArray = createWordArray();

// Conta quantos palíndromos existem no 'wordArray'
const palindromeCount = wordArray.reduce((acc, word) => {
    if (isPalindrome(word)) {
        acc++;
    }

    return acc;
}, 0);

console.log(`There are ${palindromeCount} palindromes in the generated 10000 word array`);