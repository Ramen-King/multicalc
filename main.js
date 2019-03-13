/*
# ========================================================
# = Initialization
# ========================================================
*/
// global array
let numbers = [];
let roundedNumbers =[];

// When the window loads, set up event listeners
window.onload = init;

// Sets up event listeners
function init() {

    // When the user clicks the append button, append the given number to the list.
    document.querySelector('#append')
        .addEventListener('click', appendToList);

    // When the user clicks the remove button, remove the number at the index given from the list.
    document.querySelector('#remove')
        .addEventListener('click', removeFromList);

    // When the user clicks the clear button, remove all items from the list.
    document.querySelector('#clear')
        .addEventListener('click', clearList);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#add')
        .addEventListener('click', addToAll);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#subtract')
        .addEventListener('click', subtractFromAll);
        
    // When the user clicks the multiply button, multiply the value by each item.
    document.querySelector('#multiply')
        .addEventListener('click', multiplyByAll);
        
    // When the user clicks the divide button, divide the value from each item.
    document.querySelector('#divide')
        .addEventListener('click', divideFromAll);
    // When the user clicks the 🥧button, multiplies pi the value to each item.
        document.querySelector('#pi')
        .addEventListener('click', piToAll);
}

/*
# ========================================================
# = List Management
# ========================================================
*/

// Append to the list.
function appendToList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    // Get the value we're going to append from the input field.
    let number = document.querySelector('#list-number').value;
    //only run when there is a value
    let newNum = Number(number);
    if(number !== ''){
        numbers.push(newNum);
        addToUL(newNum);
    } 
    
    // Append the number to our array.
    // Hint: here (and elsewhere), watch the TYPE of the value above.
    // Research `typeof` operator if you're not sure.

    // Update our html.
    
    console.log(numbers)

}
// Remove from the list.
function removeFromList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the index we'll remove from the input field.
    let index = document.querySelector('#number-list').value;
    // Remove the number at that index from the list.
    numbers.splice(index, 1);
        
    
    /*
    ### Hints:
    
    * You can either loop through... or use array methods. Check out concat!
    
    * Either way, though, we've declared out array using `let` this time,
    and reassigning the array is probably the best approach with our current
    tools.
    */
   
   // Update our html.
   
   updateUL();
   console.log(numbers) 
}

function clearList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Clear the array of all values.
    if(numbers !== 0){
        numbers = [];
    }
    console.log(numbers)
    // Update our html.
    updateUL()
}

/*
# ========================================================
# = Math Section
# ========================================================
*/


function addToAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    if(document.querySelector('#numberForMath').value === '')
    // Grab value to add.
    // let numberToAdd = document.querySelector('#numberForMath').value;
    // let newNum = Number(numberToAdd);
    // Add value to everything on the list.
    for(let i = 0; i < numbers.length; i++) {
        if(numberToAdd !== ''){
            numbers[i] = numbers[i] + newNum;
            console.log(numbers[i])
        }
        
    }

    // Update our html.
    updateUL();
}

function subtractFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to add.
    let numberToSubtract = document.querySelector('#numberForMath').value;
    let newNum = Number(numberToSubtract);
    for(let i = 0; i < numbers.length; i++) {
        if(numberToSubtract !== ''){
            numbers[i] = numbers[i] - newNum;
            console.log(numbers[i]);
        }
    }
    // Add value to everything on the list.
    
    // Update our html.
    updateUL();
}

function multiplyByAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to add.
    let numberToMultiply = document.querySelector('#numberForMath').value;
    let newNum = Number(numberToMultiply);
    for(let i = 0; i < numbers.length; i++){
        if(numberToMultiply !== ''){
            numbers[i] = numbers[i] * newNum;
            console.log(numbers);
        }
    }
    // Add value to everything on the list.
    
    
    // Update our html.
    updateUL();
}

function divideFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let numberToDivide = document.querySelector('#numberForMath').value;
    let newNum = Number(numberToDivide);   
    // Divide value from everything on the list.
    for(let i = 0; i < numbers.length; i++){
        if(numberToDivide !== ''){
            numbers[i] = numbers[i] % newNum;
            console.log(numbers);
        }
    }

    // Update our html.
    updateUL();
}

function piToAll(event){
    //Prevents page from reloading on button press.
    event.preventDefault();
    //apply pi to each item in the list.
    for(let i = 0; i < numbers.length; i++)
    //numbers[i] = (Math.round(numbers[i] * Math.PI))
    numbers[i] = numbers[i] * Math.PI;
    console.log(numbers)
    // Apply pi to all numbers on the list.
    updateUL();
}


/*
# ========================================================
# = HTML Management
# ========================================================
*/

function updateUL() {
    clearUL();
    for(let i = 0; i < numbers.length; i++) {
        if(numbers.length)
        addToUL(numbers[i]);
    }
}

function clearUL() {
    const ul = document.querySelector('#number-list');
    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

// Append to the UL.
function addToUL(numberToAppend) {
    const UL = document.querySelector('#number-list');
    const newLI = document.createElement('li');
    newLI.innerText = numberToAppend;
    UL.appendChild(newLI);
}