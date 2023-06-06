const container = document.querySelector('.container');

var btnArr = [];
btnArr.length = 600;

for(let i = 0; i < btnArr.length; i++) {
    btnArr[i] = document.createElement('button');
}

for(let i = 0; i < btnArr.length; i++) {
    container.append(btnArr[i]);
}

//btnArr is the array that contains all the button objects
for(let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener('mouseover', function run() {
        btnArr[i].style.backgroundColor = 'black';
    });
}



