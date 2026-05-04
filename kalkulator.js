const display = document.querySelector(".display");
const tombol = document.querySelectorAll("button");

tombol.forEach((tombol) => {
    tombol.addEventListener("click", () => {
        if (tombol.classList.contains("hapus")) {
            display.innerHTML = "";
        } else if (tombol.classList.contains("equal")) {
            display.innerHTML = eval(display.innerHTML);
        } else {
            if (display.innerHTML === "" && tombol.classList.contains("kurang")) {
                display.innerHTML = "-";
            } else if (display.innerHTML === "" && tombol.classList.contains("operator")) {
                display.innerHTML = "";
            } else if ((display.innerHTML.endsWith("+") || display.innerHTML.endsWith("-") || display.innerHTML.endsWith("*") || display.innerHTML.endsWith("/")) && tombol.classList.contains("operator")) {
                display.innerHTML += "";
            } else {
                display.innerHTML += tombol.value;
            }
        }
    })
});
