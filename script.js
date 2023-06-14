const container = document.querySelector('.container');

var btnArr = [];
btnArr.length = 2624;

for(let i = 0; i < btnArr.length; i++) {
    btnArr[i] = document.createElement('button');
}

for(let i = 0; i < btnArr.length; i++) {
    container.append(btnArr[i]);
}

//mode code
var mode = 'paint'; //default mode

const modeButton = document.querySelector('.mode');

modeButton.addEventListener('click', function run() {

    if(mode == 'paint') {
        mode = 'erase';
        modeButton.innerHTML = 'Paint';
    }else {
        mode = 'paint';
        modeButton.innerHTML = 'Erase';
    }

});

//erase all code

const eraseAll = document.querySelector('.erase-all');

eraseAll.addEventListener('click', function run() {
    for(let i = 0; i < btnArr.length; i++) {
        btnArr[i].style.backgroundColor = 'white';
    }
});


//brush code

//Add brush change feature




//btnArr is the array that contains all the button objects
for(let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener('mouseover', function run() {
        if(mode == 'paint') {
            btnArr[i].style.backgroundColor = 'black';
        }else {
            btnArr[i].style.backgroundColor = 'white';
        }
        
    });
}



