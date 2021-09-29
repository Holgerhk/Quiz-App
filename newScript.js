const btn_begin = document.querySelector(".btn");
const btns_page_1 = document.querySelectorAll(".page-1 .btns");
const btns_page_2 = document.querySelectorAll(".page-2 .btns");
const btns_page_3 = document.querySelectorAll(".page-3 .btns");
const btns_page_4 = document.querySelectorAll(".page-4 .btns");
const btns = document.querySelectorAll(".btns");
const landing_page = document.querySelector(".landing-page");
const page_1 = document.querySelector(".page-1");
const page_2 = document.querySelector(".page-2");
const page_3 = document.querySelector(".page-3");
const page_4 = document.querySelector(".page-4");

const wrong_container = document.querySelector(".wrong-container");
const right_container = document.querySelector(".right-container");

let wrong = [];
let correct = [];

btn_begin.addEventListener("click", () => {
    landing_page.style.display = "none";
    page_1.style.display = "block";
});

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.style.display = "none";
        btn.parentElement.nextElementSibling.style.display = "block";
    });
});

btns_page_1.forEach(btn => {
    const check = "A - True";
    selectAnswer(check, btn);
});

btns_page_2.forEach(btn => {
    const check = "C - sort()";
    selectAnswer(check, btn);
});

btns_page_3.forEach(btn => {
    const check = "A - True";
    selectAnswer(check, btn);
});

btns_page_4.forEach(btn => {
    const check = "C - charAt()";
    selectAnswer(check, btn);

    correct.forEach(cor => {
        const boxRight = document.createElement("div");
        boxRight.classList.add("right-box");
    
        boxRight.innerHTML = `
        <p class="right-text">${cor}</p>
        `;
    
        right_container.appendChild(boxRight);
    });
    
    wrong.forEach(wro => {
        const boxWrong = document.createElement("div");
        boxWrong.classList.add("wrong-box");
    
        boxWrong.innerHTML = `
        <p class="wrong-text">${wro}</p>
        `;
    
        wrong_container.appendChild(boxWrong);
    });
    console.log("hi");
});

function selectAnswer(valueCheck, btn) {
    btn.addEventListener("click", () => {
        if (btn.textContent == valueCheck) {
            correct.push(btn.textContent);
        } else {
            wrong.push(btn.textContent);
        }
    });
}