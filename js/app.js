'use strict';

let myMajor=prompt('Does my major is mechanical engineering ?');
myMajor=myMajor.toLowerCase();
switch(myMajor){
case 'yes':
case 'y' :
//   console.log(myMajor);
  alert('Yes you are right');
  break;
case 'no':
case 'n' :
//   console.log(myMajor);
  alert('NO, I am MECHANICAL ENGINEER!');
  break;
default:
  alert('please write yes or no');
  break;
}

let myFavouriteone = prompt('Do I love basketball more than the Hicking ?');
myFavouriteone=myFavouriteone.toLowerCase();
if (myFavouriteone==='yes'|| myFavouriteone==='y') {
//   console.log('if1',myFavouriteone);
  alert('No, I love Hicking More');

}else if (myFavouriteone==='no'||myFavouriteone==='n') {
//   console.log('if2',myFavouriteone);
  alert('yes, I love Hicking More');
}else{
  alert('please write yes or no');
}

let hatefulHabit = prompt('Do I hate the somking ?');
hatefulHabit=hatefulHabit.toLowerCase();
switch(hatefulHabit){
case 'yes':
case 'y' :
//   console.log(hatefulHabit);
  alert('Yes you are right');
  break;
case 'no':
case 'n' :
//   console.log(hatefulHabit);
  alert('NO, I hate it!');
  break;
default:
  alert('please write yes or no');
  break;
}
let whatDoing = prompt('Do I\'m studying the programming now ?');
whatDoing=whatDoing.toLowerCase();
if (whatDoing==='yes'|| whatDoing==='y') {
//   console.log('if1',whatDoing);
  alert('yes sure');

}else if (whatDoing==='no'||whatDoing==='n') {
//   console.log('if2',whatDoing);
  alert('no,I\'m studying');
}else{
  alert('please write yes or no');
}


let myFavouritetwo=prompt('Do I love playing football and swimming ?');

switch(myFavouritetwo.toLowerCase()){
case 'yes':
case 'y' :
//   console.log(myFavouritetwo);
  alert('Yes you are right');
  break;
case 'no':
case 'n' :
//   console.log(myFavouritetwo);
  alert('NO, I love it!');
  break;
default:
  alert('please write yes or no');
  break;
}
