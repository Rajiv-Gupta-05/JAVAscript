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
