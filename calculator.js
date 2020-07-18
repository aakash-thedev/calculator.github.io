'use strict';

// Calculator Functions

var app = document.getElementById('app-table');
var operations = document.getElementsByClassName('operations');
var userScreen = document.getElementById('user-screen');
var inputString = "";

function displayText(value){
    userScreen.innerText += value;
    inputString = userScreen.innerText;
}

function clear(){
    userScreen.innerHTML = "";
}

var AC = document.getElementById('clear');
AC.addEventListener('click', clear);


function solve(){
    var result = eval(inputString);
    userScreen.innerText = result;
    inputString = result;
    console.log(inputString);
}

function deleteText(){
    inputString = inputString.slice(0, inputString.length-1);
    console.log(inputString);
    userScreen.innerText = inputString;
}

function reverseSign(){

    var tempString = inputString;

    if (tempString > 0){
        tempString = -(inputString);
        userScreen.innerText = tempString;
        inputString = tempString;
    }
    else if (inputString < 0){
        tempString = inputString;
        userScreen.innerText = Math.abs(tempString);
        inputString = Math.abs(tempString);
    }
}


// Theme changer Functions

var toggleSwitch = document.getElementsByClassName('slider');
var body = document.getElementsByTagName('body');
var toggleCheckedStatus = document.getElementsByTagName('input');
var heading1 = document.querySelector('#heading1');
var heading2 = document.getElementById('heading2');
var heading4 = document.getElementById('heading4');
var para = document.getElementsByClassName('para');
var themeCaption = document.getElementsByClassName('theme-caption');

function changeTheme(){

	if( toggleCheckedStatus[0].checked === false ){

        console.log('checked');

        heading1.style.color = 'black';
        heading4.style.color = 'black';
        heading2.style.color = 'black';

        for (var i=0; i<=para.length-1; i++){
            para[i].style.color = 'orangered'
        }

        for (var i=0; i<=themeCaption.length-1; i++){
            themeCaption[i].style.color = 'black';
        }

        app.style.backgroundImage = 'linear-gradient(45deg, white, white)';
        app.style.color = "black";

        userScreen.style.backgroundColor = 'white';
        userScreen.style.color = 'black';

        for (var i=0; i<=operations.length-1; i++){
            operations[i].style.backgroundColor = 'orangered'
        }

        body[0].style.backgroundImage = 'linear-gradient(to right, white, white)';
        
	}
	else{
        console.log('unchecked');

        heading1.style.color = 'white';
        heading4.style.color = 'white';
        heading2.style.color = 'white';

        for (var i=0; i<=para.length-1; i++){
            para[i].style.color = '#62dfd8';
        }

        for (var i=0; i<=themeCaption.length-1; i++){
            themeCaption[i].style.color = 'white';
        }

        app.style.backgroundImage = 'linear-gradient(45deg, #5b5a5a, #020712)';
        app.style.color = "white";

        userScreen.style.backgroundColor = '#34353d';
        userScreen.style.color = 'white';

        // operations[0].style.backgroundColor = '#1b827d';

        for (var i=0; i<=operations.length-1; i++){
            operations[i].style.backgroundColor = '#1b827d'
        }

		body[0].style.backgroundImage = 'linear-gradient(to right, #222226, black)';
	}
}

toggleSwitch[0].addEventListener('click', changeTheme);