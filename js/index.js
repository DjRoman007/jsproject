let message = 'Hello JavaScript';
alert(message);
message = 'Nice to see you';
alert(message);

const userAge = parseInt(prompt('Enter your age'));
alert('Your arege is' + userAge);

const nextAge = addOne(userAge);
alert('Next year you will be' + nextAge);

//if (userAge >=18 && userAge ,65) {
  //  alert('You are adult');
//}else if(userAge >=65);{
    //alert('You are retired');
//}else{
  //  alert('You are kid');
    //}

function addOne(value) {
    const newValue = value + 1;
    return newValue;
}

