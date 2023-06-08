let nominaBruta = 1800;
console.log(nominaBruta);
document.getElementById ('nominaBrutaCardText').textContent += nominaBruta + " " + "€";

let impuestosMensuales = 250;
console.log(impuestosMensuales);
document.getElementById ('impuestosMensualesCardText').textContent += impuestosMensuales + " " + "€";

let nominaNeta = nominaBruta - impuestosMensuales;
console.log(nominaNeta);
document.getElementById ('nominaNetaCardText').textContent += nominaNeta + " " + "€";

let empresa = 'Mi Empresa SL';
console.log(empresa);
document.getElementById ('empresaCardText').textContent += empresa;

let formaJuridica = false;
console.log(formaJuridica);
document.getElementById ('formaJuridicaCardText').textContent +=formaJuridica;

//FUNCIONES

function saludarMarta(nombre) {
       return "Hola " + nombre + ", bienvenida.";
}
console.log(saludarMarta);
document.getElementById ('saludoCardtext').textContent = saludarMarta ("Marta");

//OBJETOS

//Crea una objeto carro haciendo la abstracción de sus atributos y un objeto anidado

let coche = {
    marcaCoche : "Seat",
    precioCoche : 12000,
    disponible : true
}
console.log(coche);
console.log(coche.precioCoche);
document.write(coche.precioCoche + "<br>");

//Crear una function que devuelva la marca del coche

function obtenerMarcaCoche() {
    let marca = "Seat";
    return marca;
  }
  
  let marcaCoche = obtenerMarcaCoche();
  console.log(marcaCoche);
  document.write(marcaCoche + "<br>");

  //Crea una función que devuelva la cantidad de puestas que tiene el coche

  function obtenerPuertasCoche() {
    let puertasCoche = 4;
    return puertasCoche;
  }
  
  let puertasCoche = obtenerPuertasCoche();
  console.log(puertasCoche);
  document.write(puertasCoche + "<br>");

  //Crear una funcion que devuelva un atributo del objeto aninado (coche)

  const {precioCoche} = coche;
  console.log(precioCoche);
  document.write(precioCoche + "<br>");

  //ARRAYS

  //Crear un array de 10 numeros
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numeros);
  console.table(numeros);
  //Crear una función que imprima en consola todos los números del array (ciclo for)
  function imprimirNumeros(numeros) {
    for (let i = 0; i < numeros.length; i++) {
      console.log(numeros[i]);
    }
  }
  
   imprimirNumeros(numeros);

   //Crear una función que añada un número al array.
   numeros.push(11); //lo añade a la última posición
   console.log(numeros);
   numeros.unshift(0); //lo añade a la primera posición
   console.log(numeros);
  //Crear una función que elimine los números pares de ese array
    let newNumeros = numeros.filter(element => element % 2 !== 0); //Crea un nuevo array sin los números pares
    console.log(newNumeros); // [1, 3, 5...]

    




  

