'use strict';


let userName;
while (!userName) {

  userName=prompt('what\'s your name ?');
  if (userName) {

    alert('welcome ' + userName);
  }
  if (!userName) {
    alert('please write your name');
  }
}



let score = 0;
function question1() {
  let myMajor = prompt('Does my major is mechanical engineering ?');
  myMajor = myMajor.toLowerCase();
  switch (myMajor) {
  case 'yes':
  case 'y':

    alert('Yes you are right');
    score++;
    break;
  case 'no':
  case 'n':

    alert('NO, I am MECHANICAL ENGINEER!');
    break;
  default:
    alert('please write yes or no');
    break;
  }
}
question1();

function question2() {

  let myFavouriteone = prompt('Do I love basketball more than the Hicking ?');
  myFavouriteone = myFavouriteone.toLowerCase();
  if (myFavouriteone === 'yes' || myFavouriteone === 'y') {
    alert('No, I love Hicking More');

  } else if (myFavouriteone === 'no' || myFavouriteone === 'n') {
    alert('yes, I love Hicking More');
    score++;
  } else {
    alert('please write yes or no');
  }
}
question2();

function question3() {

  let hatefulHabit = prompt('Do I hate the somking ?');
  hatefulHabit = hatefulHabit.toLowerCase();
  switch (hatefulHabit) {
  case 'yes':
  case 'y':
    alert('Yes you are right');
    score++;
    break;
  case 'no':
  case 'n':
    alert('NO, I hate it!');
    break;
  default:
    alert('please write yes or no');
    break;
  }
}
question3();

function question4() {

  let whatDoing = prompt('Do I\'m studying the programming now ?');
  whatDoing = whatDoing.toLowerCase();
  if (whatDoing === 'yes' || whatDoing === 'y') {
    alert('yes sure');
    score++;

  } else if (whatDoing === 'no' || whatDoing === 'n') {
    alert('no,I\'m studying');
  } else {
    alert('please write yes or no');
  }
}
question4();

function question5() {

  let myFavouritetwo = prompt('Do I love playing football and swimming ?');

  switch (myFavouritetwo.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('Yes you are right');
    score++;
    break;
  case 'no':
  case 'n':
    alert('NO, I love it!');
    break;
  default:
    alert('please write yes or no');
    break;
  }
}
question5();

function question6() {

  for (let i = 0; i < 4; i++) {

    let guessNumber = prompt('guess the number that in my mind ? please write number from 1 - 10');
    guessNumber = Number(guessNumber);

    if (guessNumber === 9) {

      alert('Great! You are right');
      score++;
      break;
    } else if (guessNumber > 9) {

      alert('too high, please try again');

    } else if (guessNumber < 9) {

      alert('too low, please try agian');

    }
    if (i === 3) {

      alert('you finished the 4 attempts, correct answer is 9');
      break;
    }
  }
}
question6();


function question7() {

  let guessSports = ['basketball', 'football', 'cycling', 'hicking', 'swimming', 'badminton'];
  let userAnswer = null;
  for (let j = 0; j < 6; j++) {

    userAnswer = prompt('what are the best sport for me ?');
    userAnswer = userAnswer.toLowerCase();



    for (let i = 0; i < guessSports.length; i++) {

      if (userAnswer === guessSports[i]) {
        j = 6;
        alert(`Great! playing ${userAnswer} is the best sport for me `);

      }

    }

    if (j === 5) {

      alert('you ran out all attempts!');
    } else if (j < 6) {
      alert(`NO, its not ${userAnswer} please try again you have ${5 - j} attempts`);
    }


  }
  alert(`these are the best sporets for me ${guessSports}`);
}
question7();

alert(`your score is ${score}/7`);
