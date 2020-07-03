var overlay = document.querySelector('#overlay');
var modal = document.querySelector('#modal');

function openfunc(){
    overlay.style.display = 'block';
    modal.style.display = 'block';
}

function closefunc(){
    overlay.style.display = 'none';
    modal.style.display = 'none';
}

document.querySelector('#openform').onclick = function(){
    openfunc();
}

document.querySelector('#closeform').onclick = function(){
    closefunc();
    console.log('clicked on close form');
}

var left = document.querySelector('#left');

document.querySelector('#closeleft').onclick = function(){
    left.style.display = 'none';
}

document.querySelector('#openleft').onclick = function(){
    left.style.display = 'block';
}

