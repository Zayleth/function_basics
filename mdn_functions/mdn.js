// Functions 1
// For the first task, you have to create a simple function — chooseName() — that prints a random name from the provided array (names) to the provided paragraph (para), and then run it once.

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

function chooseName(names) {
  para.innerHTML = names[Math.floor(Math.random(names) * (names.length))]
}

chooseName(names);

// Don't edit the code below here!
section.innerHTML = ' ';
section.appendChild(para);

/////////////////////////






// Functions 2
/*

For our second functions-related task, you need to create a function that draws a rectangle on the provided <canvas> 
(reference variable canvas, context available in ctx), based on the five provided input variables:

x — the x coordinate of the rectangle.
y — the y coordinate of the rectangle.
width — the width of the rectangle.
height — the height of the rectangle.
color — the color of the rectangle.

You'll want to clear the canvas before drawing, so that when the code is updated in the case of the live version, 
you don't get lots of rectangles drawn on top of one another.

*/

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Add your code here

function rectangle(x, y, width, height, color) {
  ctx.clearRect(0, 0, width, height); // clear the canvas before drawing making it transparent
  ctx.fillStyle = "purple"; // // specifies the color, gradient, or pattern to use inside shapes. 
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height); // method that draws a filled rectangle at position ( x, y ). The size of the rectangle is determined by width and height. syntax - void ctx.fillRect(x, y, width, height);
}

rectangle(x, y, width, height, color);

/////////////////////////






// Functions 3 POR TERMINAR

// Step 1
/* Refactorice el código que genera el número aleatorio en una función separada llamada random(), 
que toma como parámetros dos límites genéricos entre los que debe estar el número aleatorio 
y devuelve el resultado. */

function random(min, max) { // Getting a random number between two generic values
  let number = Math.floor(Math.random() * (max - min)) + min; // returns a random number between the specified values
  return number;
}

// Step 2
// Actualice la chooseName()función para que utilice la función de números aleatorios, 
//tome la matriz para elegir como parámetro (haciéndola más flexible) y devuelva el resultado.

function chooseName(names) {
  para.innerHTML = names[Math.floor(Math.random(names) * (names.length))]
}

/*
function chooseItem(array) {
  const choice = array[random(0, array.length)];
  return choice;
}
*/

// Step 3
// Imprima el resultado devuelto en el párrafo (para) textContent.
para.textContent // = // step 2

/////////////////////////






// Functions 4

/*
In this task, we have an array of names, and we're using Array.filter() to get an array of only names shorter than 5 characters. 
The filter is currently being passed a named function isShort() which checks the length of the name, 
returning true if the name is less than 5 characters long, and false otherwise.

We'd like you to change this into an arrow function. See how compact you can make it.
*/



/*
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');
*/

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;

// Don't edit the code below here!

section.innerHTML = ' ';
section.appendChild(para);