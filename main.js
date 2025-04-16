document.addEventListener('DOMContentLoaded', () => {

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
