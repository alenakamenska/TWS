document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("urodnostForm");
    const zasazenoInput = document.getElementById("zasazeno");
    const sklizenoInput = document.getElementById("sklizeno");
    const vysledek = document.getElementById("vysledek");
    const sklizen = document.getElementById("sklizen");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        let zasazeno = parseInt(zasazenoInput.value);
        let sklizeno = parseInt(sklizenoInput.value);

        if (isNaN(zasazeno) || isNaN(sklizeno) || zasazeno <= 0) {
            vysledek.textContent = "Neplatný vstup!";
            vysledek.style.color = "red";
        } if(zasazeno < sklizeno){
            vysledek.textContent = "Nelze sklidit více než je zasazeno";
            vysledek.style.color = "red";
        } if(zasazeno <= 0 || sklizeno < 0){
            vysledek.textContent = "Hodnoty nemůžou být záporné";
            vysledek.style.color = "red";
        }else {
            let urodnost = (sklizeno / zasazeno) * 100;
            vysledek.textContent = `Úrodnost: ${urodnost.toFixed(2)} %`;
            vysledek.style.color = "#2e6b31";
            sklizen.value = urodnost;
        }
    });
    
});