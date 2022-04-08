//JS FILE

const hamburger = document.querySelector('.hamburger-menu-container')
const hamburger__ico = document.querySelector('.fa-bars')
const hamburger__container = document.querySelector('.hamburger-menu-display')

const header = document.querySelector(".header-button");

const label_mail = document.querySelector("#label-mail");
const tn_input_mail = document.querySelector("#tn-input-mail");

window.onclick = function (e){
    if(e.target ===  hamburger__ico || e.target === hamburger__container.children){
        hamburger__container.classList.toggle('show-menu');
        hamburger__ico.classList.toggle('show-menu-ico');
    }else{
        hamburger__container.classList.remove('show-menu')
        hamburger__ico.classList.remove('show-menu-ico');
    }
}

window.onscroll = function (){

    hamburger__container.classList.remove('show-menu')
    hamburger__ico.classList.remove('show-menu-ico');

}

let count = -1;

tn_input_mail.addEventListener('click', function (){
    count++;
    if(tn_input_mail.value === ""){
        if(count%2 === 0){
            label_mail.classList.add('input-span')
        }else{
            label_mail.classList.remove('input-span')
        }
    }
},false)

function inputValidation(value){
    if(value !== ""){
        label_mail.classList.add('input-span')
    }else{
        label_mail.classList.remove('input-span')
    }
}