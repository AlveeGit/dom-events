function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button by setting function name most used**
const blueButton = document.getElementById('make_blue');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// handle green button by setting anonymous function 
const greenButton = document.getElementById('make_green');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle  by add eventlisener
const pinkButton = document.getElementById('make_pink');
pinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
//add eventlisener
const grayButton = document.getElementById('make_gray');

grayButton.addEventListener('click', function makeGray() {
    document.body.style.backgroundColor = 'gray';
})

// direct shortcut  most used**
document.getElementById('make_lime').addEventListener('click', function makeGray() {
    document.body.style.backgroundColor = 'lime';
});