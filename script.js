const guu = document.getElementById("guu");
const choki = document.getElementById("choki");
const paa = document.getElementById("paa");

const message = document.getElementById("message");
const result = document.getElementById("result");
const winning = document.getElementById("winning");
const again = document.getElementById("again");
let win = 0;

Buttons = ["guu","choki","paa"];
Images = ["IMG/guu.png","IMG/choki.png","IMG/paa.png"];
ImagesAlt = ["グー","チョキ","パー"]

function buttonResult(value,r) {
    const cal = Number(value) - Number(r);
    if(cal === 0){
        result.textContent = "あいこ";

    }else if( cal === -1 || cal === 2 ){
        result.textContent = "かち";
        win++
        winning.textContent = win+"連勝中!"
    }else if( cal === 1 || cal === -2 ){
        result.textContent = "まけ";
        win = 0;
        winning.textContent = "";
    }
}

function buttonEnemy(r) {
    message.innerHTML = "";
    const img = document.createElement("img");
    img.src = Images[r];
    img.alt = ImagesAlt[r];

    message.appendChild(img);
}

for(let i = 0; i < Buttons.length; i++){
    const btn = document.getElementById(Buttons[i]);
    btn.addEventListener("click", () => {
        const value = i;
        const r = Math.floor(Math.random() * 3);
        buttonEnemy(r);
        buttonResult(value,r);
        again.textContent = "もう一度";
        again.classList.add("active");
    });
}

again.addEventListener("click", () => {
    again.textContent = "";
    message.textContent = "最初はグー、じゃんけん";
    again.classList.remove("active");
    result.textContent = "";
});
