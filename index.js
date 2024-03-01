//QUIZZ

const QuestionContainer = document.querySelector('.click-event');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2')
const reponse = document.querySelector('p');

QuestionContainer.addEventListener('click', () => {
    QuestionContainer.classList.toggle('question-click');
});

btn1.addEventListener('click', () => {
    reponse.classList.add('reponse');
    reponse.style.background = "green";
    reponse.style.borderRadius = "8px";
})

btn2.addEventListener('click', () => {
    reponse.classList.add('reponse')
    reponse.style.background = "red";
    reponse.style.borderRadius = "8px";
    alert("BAHAHAH T'ES NUL TU AS FAUX 🤣​🤣​")
})

//SOURIS
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";

});

window.addEventListener("mousedown", () => {
    // console.log("TEST")
})

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;
    if( e.key === "f") {
        keypressContainer.style.background = "orange";
    } else {
        keypressContainer.style.background = "#333";
    }
});

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if(window.scrollY > 0 ) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-50px";
    }
})

const inputname = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo ="";
let language ="";

inputname.addEventListener('input', (e) => {
    pseudo = e.target.value
});

select.addEventListener('input', (e) => {
    language =  e.target.value;
});

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (cgv.checked) {
        document.querySelector('form > div').innerHTML  = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Language : ${language}</h4>
        `;
        } else {
        alert("Veuillez cocher les CGV")
    }
});

window.addEventListener('load', () => {
    //console.log("Site chargé");
});

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});