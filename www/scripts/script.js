console.log('script work!');

$(document).ready(function(){
    $('.service-card__title').addClass('wow');
}

)


let burger = document.querySelector('.js-burger');
let menu = document.querySelector('.js-menu');

burger.addEventListener('click', function(event) {
    event.preventDefault();
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        return
    }
    menu.classList.add('open');
})


// let btn = document.querySelector('.js-button');
// let box = document.querySelector('.js-box');
// // let isGreen = true;

// btn.addEventListener('click', function() {
//   if (box.classList.contains('blue')) {
//     box.classList.remove('blue');
//     // box.classList.add('blue');
//     // isGreen = false;
//     return;
//   }

//   box.classList.add('blue');
//   // box.classList.remove('blue');
//   // isGreen = true;
// });