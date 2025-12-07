const guu = document.getElementById("guu");
const choki = document.getElementById("choki");
const paa = document.getElementById("paa");

Buttons = ["guu","choki","paa"];
Images = ["../IMG/guu.png","../IMG/choki.png","../IMG/paa.png"];
ImagesAlt = ["グー","チョキ","パー"]

function buttonResult(value,r) {
    if( Number(value) - Number(r) === 0){
        document.getElementById("result").textContent = "あいこ";
        console.log(value+" "+r)
        console.log(Number(value) - Number(r));
    }else if( Number(value) - Number(r) === -1 ||
        Number(value) - Number(r) === 2 
    ){
        document.getElementById("result").textContent = "かち";
        console.log(value+" "+r)
        console.log(Number(value) - Number(r));
    }else if( Number(value) - Number(r) === 1 ||
        Number(value) - Number(r) === -2 
    ){
        document.getElementById("result").textContent = "まけ";
        console.log(Number(value)+" "+Number(r)+" "+Number(value) - Number(r));
    }
}

function buttonEnemy(r) {
    const img = document.createElement("img");
    img.src = Images[r];
    img.alt = ImagesAlt[r];

    document.getElementById("message").appendChild(img);
}

for(let i = 0; i < Buttons.length; i++){
    const btn = document.getElementById(Buttons[i]);
    btn.addEventListener("click", () => {
        const value = i;
        const r = Math.floor(Math.random() * 3);
        buttonEnemy(r);
        buttonResult(value,r);
        console.log(value+" "+r)
        console.log(Number(value) - Number(r));
    });
}