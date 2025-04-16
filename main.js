document.addEventListener('DOMContentLoaded', () => {
// let result = document.querySelector("#ecrand")
// const btnC = document.querySelector('#btnc')
// const btnMd = document.querySelector('#btnMd')
// const btnD = document.querySelector('#btnS')
// const btn7 = document.querySelector('#btn7')
// const btn8 = document.querySelector('#btn8')
// const btn9 = document.querySelector('#btn9')
// const btnX = document.querySelector('#btnx')
// const btn4 = document.querySelector('#btn4')
// const btn5 = document.querySelector('#btn5')
// const btn6 = document.querySelector('#btn6')
// const btnM = document.querySelector('#btn-')
// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('#btn2')
// const btn3 = document.querySelector('#btn3')
// const btnPl = document.querySelector('#btnPl')
// const btn0 = document.querySelector('#btn0')
// const btnV = document.querySelector('#btnv')
// const btnE = document.querySelector('#btnE')

let result = document.querySelector("#ecrand")
const boutons = document.querySelectorAll("button");
let resultat = ""
boutons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const valeur = event.target.innerText;
        console.log(valeur);
        if(valeur === "C"){
            resultat = ""
        } else if (valeur === "=") {
            try {
                const formule = resultat.replace(/X/g, "*").replace(/,/g, ".");
                resultat = eval(formule).toString();
            } catch {
                resultat = "Erreur";
            }
        } else {
            resultat += valeur;
        } 
        result.textContent = resultat;
        
    })
    
    
});





})
