//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFoods(list){
    const pizzaType1 = list.pizza[0]
    const pizzaType2 = list.pizza[1]
    const tacos = list.tacos
    const iceCream1 = list.ice_cream[0]
    const iceCream2 = list.ice_cream[1]
    const iceCream3 = list.ice_cream[2]
    const shake1 = list.shakes[0].oberwise
    const shake2 = list.shakes[0].dunkin
    const shake3 = list.shakes[0].culvers
    const shake4 = list.shakes[0].mcDonalds
    const shake5 = list.shakes[0].cupids_candies
    console.log('My favorite kind of pizza is ' + pizzaType1 + ' and ' + pizzaType2 + "." + " My preferred tacos are " + tacos + ". I have three total favorite ice cream flavors: " 
    + iceCream1 + ", " + iceCream2 + ", and " + iceCream3 + ". I love all kinds of shakes, in fact, I have a list of places and flavors that I enjoy. Such as a " + shake1 + " Shake from Oberwise."
    + " Or a " + shake2 + " Shake from Dunkin. If you happen upon a Culver's, I want " + shake3 + ". McDonald's has their classic " + shake4 + " that I can never get enough of."
    + " And finally Cupid's Candies has a " + shake5 + " to die for!")
    return 'My favorite kind of pizza is ' + pizzaType1 + ' and ' + pizzaType2 + "." + " My preferred tacos are " + tacos + ". I have three total favorite ice cream flavors: " 
    + iceCream1 + ", " + iceCream2 + ", and " + iceCream3 + ". I love all kinds of shakes, in fact, I have a list of places and flavors that I enjoy. Such as a " + shake1 + " Shake from Oberwise."
    + " Or a " + shake2 + " Shake from Dunkin. If you happen upon a Culver's, I want " + shake3 + ". McDonald's has their classic " + shake4 + " that I can never get enough of."
    + " And finally Cupid's Candies has a " + shake5 + " to die for!"
}

favoriteFoods(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person (name, age){
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method

    this.printInfo = () => {
        console.log(`Hello my name is ${this.name} and I am ${this.age}-years-old.`)
    }

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    this.add1Age = () => {
        this.age = this.age + 1
    }
}

// Instantiating
const hu1 = new Person('Cody', 100);
hu1.printInfo();
const hu2 = new Person('Thomas', 97);
hu2.printInfo();
hu2.add1Age();
hu2.add1Age();
hu2.add1Age();
hu2.printInfo();


// Class version

class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    printInfo = () => {
        console.log(`Hello my name is ${this.name} and I am ${this.age}-years-old.`)
    }

    add1Age = () => {
        this.age = this.age + 1
    }
}

// Instantiating
const hu3 = new Human('John', 100);
hu3.printInfo();
const hu4 = new Human('Jimothy', 97);
hu4.printInfo();
hu4.add1Age();
hu4.add1Age();
hu4.add1Age();
hu4.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringLength = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve(`Big word`)
        } else {
            reject(`Small Number`)
        }
    })
}

async function gettingStringLength (str) {
    const res = await stringLength(str)
    console.log(res)
}

console.log(stringLength('Test'))
console.log(stringLength('This is the big one'))

console.log(gettingStringLength('Test'))
console.log(gettingStringLength('This is the big one'))