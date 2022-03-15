left_button = document.getElementById('left');
right_button = document.getElementById('right');
image_display = document.getElementById('display');
status_text = document.getElementById('status');
random_button = document.getElementById('random');
latin_text = document.getElementById('latin');
svenska_text = document.getElementById('svenska');
back_image = document.getElementById('back');

var current_index = 0;
var max_index = daggdjur.length-1;
var path_to_images = './static/daggdjur/';

left_button.addEventListener('click', () => {click('left')});
right_button.addEventListener('click', () => {click('right')});
random_button.addEventListener('click', () => {random()});
image_display.addEventListener('click', () => {clickImage()});
back_image.addEventListener('click', () => {clickImage()});

function setStatus(){
    status_text.textContent = `${current_index+1}/${max_index+1}`;
}

function clickImage(){
    document.getElementById('flip').classList.toggle('toggle');
}

function setDisplay(){
    img_src = path_to_images+daggdjur[current_index]['src'];
    latin_text.textContent = daggdjur[current_index]['latin'];
    svenska_text.textContent = daggdjur[current_index]['swe'];
    image_display.setAttribute('src', img_src);
}

function click(direction){
    document.getElementById('flip').classList.remove('toggle');
    setTimeout(()=>{}, 250);
    var calc = direction == 'left' ? -1 : 1;
    if(calc+current_index < 0){
        current_index = max_index;
    }else if(calc+current_index > max_index){
        current_index = 0;
    }else{
        current_index += calc;
    }
    setStatus();
    setDisplay();
}

function random(){
    current_index = Math.floor(Math.random() * (max_index+1));
    setStatus();
    setDisplay();
}

setStatus();
setDisplay();