

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item')

let dots = document.querySelectorAll('.slider .dots li')

let prev = document.getElementById("prev")
let next = document.getElementById("next")

let active = 0
let lengthItems = items.length - 1

let refreshSlider = setInterval(()=> {next.click()}, 5000)

//
const html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');


if(localStorage.getItem('modo') == "dark-mode"){
    let switchbtn = document.getElementById('switch');switchbtn.classList.add('night')
}

function myFunction(){

    if(html.classList.contains('dark-mode')){
        html.classList.remove('dark-mode');
        localStorage.setItem('modo', '');
    document.querySelector('#switch').classList.remove('night')

    }else{
        html.classList.add("dark-mode");
        localStorage.setItem('modo', 'dark-mode');
        document.querySelector('#switch').classList.add('night')

    }
}


document.querySelector(".icon-burger").addEventListener('click', function(){
    document.querySelector(".links").classList.toggle('active')
})

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1
    }
    reloadSlider()
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems
    }else{
        active = active - 1
    }
    reloadSlider()
}


function reloadSlider(){
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px'

    let lastActiveDot = document.querySelector('.slider .dots li.active')
    lastActiveDot.classList.remove('active')

    dots[active].classList.add('active')

    clearInterval(refreshSlider)
    refreshSlider = setInterval(()=> {next.click()}, 5000)
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider()
    })
})

