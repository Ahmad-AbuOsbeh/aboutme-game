'use strict';

let userName = prompt('what\'s your name ?');
alert('welcome ' + userName);

let score=0;
function question1() {
let myMajor = prompt('Does my major is mechanical engineering ?');
myMajor = myMajor.toLowerCase();
switch (myMajor) {
case 'yes':
case 'y':
  //   console.log(myMajor);
  alert('Yes you are right');
  score++;
  break;
case 'no':
case 'n':
  //   console.log(myMajor);
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
  //   console.log('if1',myFavouriteone);
  alert('No, I love Hicking More');

} else if (myFavouriteone === 'no' || myFavouriteone === 'n') {
  //   console.log('if2',myFavouriteone);
  alert('yes, I love Hicking More');
  score++;
} else {
  alert('please write yes or no');
}

let hatefulHabit = prompt('Do I hate the somking ?');
hatefulHabit = hatefulHabit.toLowerCase();
switch (hatefulHabit) {
case 'yes':
case 'y':
  //   console.log(hatefulHabit);
  alert('Yes you are right');
  score++;
  break;
case 'no':
case 'n':
  //   console.log(hatefulHabit);
  alert('NO, I hate it!');
  break;
default:
  alert('please write yes or no');
  break;
}
}
question2();

function question3() {
let whatDoing = prompt('Do I\'m studying the programming now ?');
whatDoing = whatDoing.toLowerCase();
if (whatDoing === 'yes' || whatDoing === 'y') {
  //   console.log('if1',whatDoing);
  alert('yes sure');
  score++;

} else if (whatDoing === 'no' || whatDoing === 'n') {
  //   console.log('if2',whatDoing);
  alert('no,I\'m studying');
} else {
  alert('please write yes or no');
}
}
question3();

function question4() {
  
let myFavouritetwo = prompt('Do I love playing football and swimming ?');

switch (myFavouritetwo.toLowerCase()) {
case 'yes':
case 'y':
  //   console.log(myFavouritetwo);
  alert('Yes you are right');
  score++;
  break;
case 'no':
case 'n':
  //   console.log(myFavouritetwo);
  alert('NO, I love it!');
  break;
default:
  alert('please write yes or no');
  break;
}
}
question4();

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
// console.log('string');
let guessSports = ['basketball', 'football', 'cycling', 'hicking', 'swimming', 'badminton'];
let userAnswer=null;
for (let j = 0; j < 6; j++) {

  userAnswer= prompt('what are the best sport for me ?');
  userAnswer=userAnswer.toLowerCase();



  for (let i = 0; i < guessSports.length; i++) {
    // const element = array[i];

    if (userAnswer === guessSports[i]) {
      j=6;
      alert(`Great! playing ${userAnswer} is the best sport for me `);
      // break;
    }

  }

  if (j===5){

    alert('you ran out all attempts!');
  } else if(j<6){
    alert(`NO, its not ${userAnswer} please try again you have ${5 - j} attempts`);
  }


}
alert(`these are the best sporets for me ${guessSports}`);

alert(`your score is ${score}/7`);
// for (let j = 0; j < 5; j++) {
// const element = array[j];
// console.log('the first loop', j);
// for (let i = 0; i < 10; i++) {
//   console.log('the second loop', i);
// const element = array[i];

//   }

// }
