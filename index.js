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
        keypressContainer.style.background = "#333"
    }
})