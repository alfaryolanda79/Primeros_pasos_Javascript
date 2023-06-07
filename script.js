let nominaBruta = 1800;
console.log(nominaBruta);
document.getElementById ('nominaBrutaCardText').textContent += nominaBruta + " " + "€";

let impuestosMensuales = 250;
console.log(impuestosMensuales);
document.getElementById ('impuestosMensualesCardText').textContent += impuestosMensuales + " " + "€";

let nominaNeta = nominaBruta - impuestosMensuales;
console.log(nominaNeta);
document.getElementById ('nominaNetaCardText').textContent += nominaNeta + " " + "€";