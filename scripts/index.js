document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("urodnostForm");
    const zasazenoInput = document.getElementById("zasazeno");
    const sklizenoInput = document.getElementById("sklizeno");
    const vysledek = document.getElementById("vysledek");
    const sklizen = document.getElementById("sklizen");

    const zasazenoValue = document.getElementById("zasazenoValue");
    const sklizenoValue = document.getElementById("sklizenoValue");
    
    const smile = document.querySelector(".smile");
    const frown = document.querySelector(".frown");

    zasazenoValue.innerText = zasazenoInput.value;
    sklizenoValue.innerText = sklizenoInput.value;

    zasazenoInput.addEventListener("input", function () {
        zasazenoValue.innerText = this.value;
    });

    sklizenoInput.addEventListener("input", function () {
        sklizenoValue.innerText = this.value;
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let zasazeno = parseInt(zasazenoInput.value);
        let sklizeno = parseInt(sklizenoInput.value);

        if (isNaN(zasazeno) || isNaN(sklizeno) || zasazeno <= 0) {
            vysledek.textContent = "Neplatný vstup!";
            vysledek.style.color = "red";
            updateFlowerExpression(false);
        } else if (sklizeno > zasazeno) {
            vysledek.textContent = "Nelze sklidit více, než je zasazeno!";
            vysledek.style.color = "red";
            updateFlowerExpression(false);
        } else if (zasazeno <= 0 || sklizeno < 0) {
            vysledek.textContent = "Hodnoty nemůžou být záporné.";
            vysledek.style.color = "red";
            updateFlowerExpression(false);
        } else {
            let urodnost = (sklizeno / zasazeno) * 100;
            updateFlowerExpression(urodnost > 50);
            vysledek.textContent = `Úrodnost: ${urodnost.toFixed(2)} %`;
            vysledek.style.color = "";
            sklizen.value = urodnost;
        }
    });

    function updateFlowerExpression(isHappy) {
        if (isHappy) {
            smile.style.display = "block";
            frown.style.display = "none";
        } else {
            smile.style.display = "none";
            frown.style.display = "block";
        }
    }

    updateFlowerExpression(true);
});
