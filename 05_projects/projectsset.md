# Projects related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 Solution:

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'pink':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        // Handle default case if needed
        break;
    }
  });
});

```

## Project 2 Solution:

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const weightGuide = document.querySelector('#weight-guide');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height: ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight: ${weight}`;
    } else {
       const bmi =  (weight / ((height*height)/10000)).toFixed(2);
       results.innerHTML = `<span>${bmi}</span>`;

       if (bmi < 18.6) {
           weightGuide.innerHTML = 'Underweight';
       } else if (bmi >= 18.6 && bmi <= 24.9) {
           weightGuide.innerHTML = 'Normal Range';
       } else {
           weightGuide.innerHTML = 'Overweight';
       }
    }
});

```

## Project 3 solution:

```javascript
const clock = document.getElementById('clock');

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleString();
}, 1000);
```

## Project 4 solution:

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than one");
  }else if (guess > 100) {
    alert("Please enter a number less than 100");
  }else {
    prevGuess.push(guess)
    if(numGuess === 11) {
        displayGuess(guess)
        displayMessage(`Game Over. Random Number was ${randomNumber}`)
        endGame()
    }else {
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed it right`)
        endGame()
    } else if ( guess < randomNumber) {
        displayMessage(`Number is too low.`)
    }else if ( guess > randomNumber) {
        displayMessage(`Number is too higher.`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    p.style.color = 'orange'
    p.style.cursor = 'pointer'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        playGame = true
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}` 
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

```

## Project 5 Solution:

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class = 'color>
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === '' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `;
});

```

## Project 6 Solution:

```javascript
// Generate a random colors

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let IntervalId;
const startChangingColor = function () {
  if (!IntervalId) {
    IntervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(IntervalId);
  IntervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);

```