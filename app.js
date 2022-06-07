// alert("Hello");

// Working with function and variables
/* Note: var - function + global scoped 
      let - block scoped 
      const - block scoped constant */
/*var x = 1;

x = 23;

console.log(x);

 var name = 'Mila'; // global variable
function showAlert() {
    var name = 'Mila'; // local variable
 alert('Hi ' + name);
 }
showAlert();

function otherFunction(){
    console.log('Hi ' + name) // name from global variable
}

otherFunction();

// Introduction var vs let vs const
// Example for var - function + global scoped
function findY() {
    var y = 1;
    {
        var y = 2; //global variable and visible in both alert
        alert(y); // result 2
    }
      alert(y); // result 2
}
findY();

// Example for let - block scoped
function findZ() {
    let z = 1;
    {
        let z = 3; // local scope, only block scoped
        alert(z); // result 3
    }
    alert(z); // result 1
}
findZ();
// Exaple for const - block scoped constant
const count = [1, 2, 3, 4, 5]; // the const is immutable

//count = [1, 2, 7, 8, 9]; 
// result in console Uncaught TypeError: Assignment to constant variable.at app.js:53 

console.log(count);

// Write in console <div></div> 200x
var d = '<div></div>';
var text = "";
var i;
for (i = 0; i < 10; i++) {
 console.log(text += i + d + "<br>");}
 
 var text = "";
 var i;
 for (i = 0; i < 5; i++) {
   text += "The number is " + i + "<br>";
 }

 document.getElementById("demo").innerHTML = text;

 // Working with Arrays 23:07
// Syntax: var array = [item1, item2, item3 ]
const lTetromino = 'firstShape'
const zTetromino = 'secondShape'
const oTetromino = 'thirdShape'
const iTetromino = 'fourthShape'
const tTetromino = 'fifthShape'

const tetrominoes = [lTetromino, zTetromino, oTetromino, iTetromino,tTetromino]
console.log(tetrominoes[0]);

// Working with function
function showAlert(firstName, lastName) {
    alert(firstName + ' ' + lastName  + ', you have been alerted!');
}

showAlert('Mila','Kostic');

const name = ['Mila', 'Kostic'];
function showAlert1() {
    alert(name[0] + ' ' + name[1] + ', Welcome!');
}
 showAlert1();

// Arrow Functions and forEach()
let names = ['Ania', 'Dave', 'Hannah', 'Bob']
names.forEach(name  => {
    console.log(name +  ' is the best!');
})

*/



//Code here for project

document.addEventListener('DOMContentLoaded', () => {
    // Code here
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const ScoreDisplay = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button');
    const width = 10;
    let timerId;
    let score = 0;
    const colors = [
        'orange', 
        'red',
        'purple',
        'green',
        'blue'
    ]

    console.log(squares); //check in the console


    //Rotation - Drawing Tetrominoes using classList.add() 35:12
const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width*2+1, 2],
    [1, width+1, width*2+1,width*2],
    [width, width*2, width*2+1, width*2+2]
]
const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];
 
let currentPosition = 4;
let currentRotation = 0;

console.log(theTetrominoes[0][0]);
//randomly select a Tetromino and its first rotation
let random = Math.floor(Math.random()*theTetrominoes.length);
let current = theTetrominoes[random][currentRotation];
console.log(theTetrominoes);
console.log(current);


//draw the Tetromino
function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino');
        console.log("🚀 ~ file: app.js ~ line 164 ~ draw ~ squares", squares);
        squares[currentPosition + index].style.backgroundColor = colors[random];
    })
}



//undraw the Tetromino
function undraw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('tetromino');
        console.log("🚀 ~ file: app.js ~ line 175 ~ undraw ~ squares", squares)
        squares[currentPosition + index].style.backgroundColor = '';
    })
    
}

// Times and intervals  setInterval(function, 1000)

// make the tetromino move down every second
timerId = setInterval(moveDown, 1000);

// move down function
function moveDown() {
    undraw()
    currentPosition += width;
    draw()
    //freze()
}


})
