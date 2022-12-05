// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

/*
Input: const secretCodeWord1 = "Lackadaisical" / const secretCodeWord2 = "Gobbledygook" / const secretCodeWord3 = "Eccentric"
Output: "L4ck4d41s1c4l" / "G0bbl3dyg00k" / "3cc3ntr1c"
Going to have to start with a describe statement, I will call it toNum. 
For my it statement inside the code block I will pass down the prompt as it needs to be written out in plain English. 
For the it statement function I will have 3 expect statements, one per variable
My matcher I will use .toEqual as we want the exact value of for example "Lackadaisical" to be 
turned into "L4ck4d41s1c4l"
For the test output I will put the actual expected output for each variable 
*/

describe("toNum", () => {

    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"

    it('takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.', () => {
      expect(toNum(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(toNum(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(toNum(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })  

  //    ReferenceError: toNum is not defined

// b) Create the function that makes the test pass.

/*
First thing that comes to mind is a conditional statement per each letter. I also think a for loop so it can iterate through the strings characters and identify them. I think there should be other ways but I might come back and see if I can do better. 
*/

const toNum = (string) => {
    const newArray = []
    for(let i = 0; i < string.length; i++){
    if (string[i] == "a"){
        newArray.push(string[i].replace("a", 4))
    }
    else if (string[i] == "e"){
        newArray.push(string[i].replace("e", 3))
    }
    else if (string[i] == "E"){
        newArray.push(string[i].replace("E", 3))
    }
    else if (string[i] == "i"){
        newArray.push(string[i].replace("i", 1))
    }
    else if (string[i] == "o"){
        newArray.push(string[i].replace("o", 0))
    }
    else {newArray.push(string[i])}
}
    return newArray.join("")
}







// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

/*
Input: fruitArray, letterA
Output: ["Mango", "Apricot", "Peach"]
Input: fruitArray, letterE
Output: ["Cherry", "Blueberry", "Peach"]
Starting with a describe statement, I will call it "containing". Can't really think of anything else.
For my it statement I will pass down the prompt in plain English in a string.
For the it statement function I will have 2 expect statements, one per variable
For my matcher I will use .toEqual as we want the exact value in the expected output
Test output will be expected output per variable 
*/

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("containing", () => {
    it("function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
      expect(containing(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(containing(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"]) 
    })
  })

 // ReferenceError: containing is not defined


// b) Create the function that makes the test pass.

/* first, we need to account for any letters that may be upper or lower case. We can lowercase them with .toLowerCase method. We have to map through so we can look through the array. 
*/

const containing = (array, letter) => {
    let newArray = array.map(value => value.toLowerCase())
   return newArray.filter(value => value.includes(letter)).map(value => value.charAt(0).toUpperCase() + value.slice(1))
}

/* I used .include method so it will see if it includes that letter. .charAt to capitalize first letter like expected output. 

*/

console.log(containing(fruitArray, letterE));
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

/*
For my tests describe statement I will use the name "fullHouse"
For the it statement arguement string I will put the end part of the prompt as it is explaining what the test function will do. 
I will make one expect statement per variable declaration to take in each hand array with numbers in it and it will return me a boolean value of true or false depending on if the "hand" has exactly one pair and a three of a kind. So if it does it will return true stating it is a fullHouse
*/

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe("fullHouse", () => {
    it("function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
      expect(fullHouse(hand4)).toEqual(true)
    })
  })

  //    ReferenceError: fullHouse is not defined



// b) Create the function that makes the test pass.

/* This first method of using for look and conditional at least in this first way was only party effective. only worked for the first and last array. 
*/

// const fullHouse = (array) => {
//     for (i=0; i < array.length; i++)
//     if (array.indexOf(array[i], 3)){
//     return true
//     }
//     else (array.indexOf(array[i], 4))
//     { 
//     return false
//     }
//  }

/*
This took a while, to find something that works. I found this fullHouse code that is pretty cool! I dind't know you could do this, or maybe it just didn't click until now, but you cn use an object as something to memorize things. So as you iterate through the for loop. the + 1 is for it to keep going. I think this is really cool and useful for future situations for sure!
*/

const fullHouse = (array) => {
    let countObj = {}
    for(let i of array){
      countObj[i] = (countObj[i] || 0) + 1;
    }
    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }

// console.log(fullHouse(hand1));
