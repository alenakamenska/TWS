document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btn-mode");
    const body = document.body;
    const vysledek = document.getElementById("vysledek");
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        btn.textContent = "☀️ Light Mode";
    }

    btn.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            btn.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            btn.textContent = "🌙 Dark Mode";
        }
    });
});

