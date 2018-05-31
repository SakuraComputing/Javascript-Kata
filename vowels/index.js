// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    // let vowels = 0;
    //
    // const vowelSelect = "aeiou";
    //
    // for(let char of str.toLowerCase()) {
    //     if(vowelSelect.includes(char)) {
    //         vowels ++
    //     }
    // }
    // return vowels;
    const vowelArray = str.match(/[aeiou]/gi);

    return vowelArray ? vowelArray.length : 0;
}

module.exports = vowels;

