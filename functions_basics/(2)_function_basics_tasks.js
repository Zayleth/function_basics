/* 
Un parámetro es la variable que figura entre paréntesis en la declaración de función (es un término de tiempo de declaración).
Un argumento es el valor que se pasa a la función cuando se llama (es un término de tiempo de llamada).
Declaramos funciones enumerando sus parámetros y luego las llamamos pasando argumentos.
*/

/* TASK - 1
Is "else" required?
The following function returns true if the parameter age is greater than 18.
Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
Will the function work differently if else is removed?

///////////////////////////

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
Is there any difference in the behavior of these two variants?
*/

// ANSWER - there is no difference, "return" will return the confirmation message in order when the if condition is falsy. It doesn't matter that it's out of function.

//////////////////////////////////////////////////////////////






/* TASK - 2
Rewrite the function using '?' or '||'
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:
*/

// Using a question mark operator ?
function checkAge(age) {
    return (age > 18) ? true : confirm ('Did parents allow you?');
}


// Using OR ||
function checkAge(age) {
    return (age > 18) || confirm ('Did parents allow you?');
}

/////////////////////////////////////////////////////////






/* TASK - 3
Function min(a, b)
Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

min (2, 5) // returns 2

/////////////////////////////

function min(a, b) {
    return (a > b) ? b : a;
}

min (2, 5) // returns 2

/////////////////////////////////////////////////////






/* TASKS - 4
Function pow(x,n)
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

function pow(x, n) {
    return (x ** n);
}

pow(3, 3) // returns 27

///////////////

// Create a web-page that prompts for x and n, and then shows the result of pow(x,n). ------> activity in -> index.html
// P.S. In this task the function should support only natural values of n: integers up from 1.