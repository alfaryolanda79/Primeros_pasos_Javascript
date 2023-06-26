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

function saludar(nombre) { 
       return `Hola ${nombre}, bienvenida.` 
}
console.log(saludar("Marta"));
document.getElementById ('saludoCardtext').textContent = saludar ("Marta");

//Creamos la funcion saludarMarta que maneja la variable nombre//
//cada vez que se llame a la funcion saludarMarta, aparezca Hola + el nombre que dijamos + bienvenida//
//Esto es llamar a la funcion: Le decimos a JS que en el lugar del Html donde está la id saludoCardText, aparezca//
//escrita a funcion saludarMarta, y en este caso concreto el nombre será Marta (podemos poner otro nombre)//

//Crear una funcion que reciba dos parámetros y devuelva la suma de ellos

function sumar(a,b) {
  console.log(a+b);
  return (a + b);
}
sumar(3,5);

function operarNumeros(c, d){
  let resultado = sumar(c, d)
  console.log(resultado);
  return resultado;
}
operarNumeros(5, 7);
operarNumeros(20, 1);

//Crear una funcion que determine si un número es par o impar. No hace falta poner else, lo sobreentiende.

function determinarParImpar(numero){
  if (numero % 2 == 0) {
    return (`El ${numero} es un número par`);
  
  }
    return (`El ${numero} es un número impar`);
  
  }

console.log(determinarParImpar(8));
console.log(determinarParImpar(7));



//OBJETOS

//Crea una objeto carro haciendo la abstracción de sus atributos y un objeto anidado

let coche = {
    marcaCoche : "Seat",
    precioCoche : 12000,
    disponible : true,
    puertasCoche : 4
}
console.log(coche);
console.log(coche.precioCoche);
document.write(coche.precioCoche + "<br>");

//Crear una function que devuelva la marca del coche

// function obtenerMarcaCoche(vehiculo){
//     let marca = vehiculo.marca;
//     console.log(marca);
//     return marca;
//   }  
//   obtenerMarcaCoche(coche)

//   document.write(marcaCoche + "<br>");

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

  function imprimirNumeros(array){
    for (let i = 0; i < array.length; i++){
      console.log(array[i]);
    }
  }

  //Esto aplicado a cualquier array sería:

  imprimirNumeros(numeros);

  

   //Crear una función que añada un número al array.

   function añadirNumero (array, numero){
    let numeroNuevo = array.push(numero);
    console.log(numeroNuevo);
   }

   añadirNumero(numeros)

   function añadirNumero(array, numero) {
    array.push(numero);
   }

   añadirNumero(numeros,43);
   console.log(numeros);
   //añadir número utilizando length:

   let frutas = ['plátano', 'ciruela', 'manzana'];
   document.getElementById("demo").innerHTML = frutas;
   frutas[frutas.length] = 'limón';
   document.getElementById("demo2").innerHTML = frutas;



   numeros.push(11); //lo añade a la última posición
   console.log(numeros);
   numeros.unshift(0); //lo añade a la primera posición
   console.log(numeros);
  //Crear una función que elimine los números pares de ese array
    let newNumeros = numeros.filter(element => element % 2 !== 0); //Crea un nuevo array sin los números pares
    console.log(newNumeros); // [1, 3, 5...]

    // Ordenar de forma ascendente y obtener el índice:
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});
    document.getElementById("demo3").innerHTML = points;

    //lo mismo pero ordenado de forma descendente:
    const pointes = [40, 100, 1, 5, 25, 10];
    pointes.sort(function(a, b){return b - a});
    document.getElementById("demo4").innerHTML = pointes;

    //Crear una función que devuelva el número mayor de un array.
    const numeroMayor = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo5").innerHTML = myArrayMax(numeroMayor);
    
    function myArrayMax(arr) {
      return Math.max.apply(null, arr);
    }

    //Crear una función que devuelva el número mayor de un array.
    const numeroMenor  = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo6").innerHTML = myArrayMin(numeroMenor);

    function myArrayMin(arr) {
      return Math.min.apply(null, arr);
    }

    //Convertir en minúsculas todas las letras de un texto:
    let saludo = '¡HOLA!';
    console.log(saludo.toLowerCase())

     //Convertir en mayusculas todas las letras de un texto:
     let otrosaludo = '¡hola!';

     console.log(otrosaludo.toUpperCase())

     
     //Convertir en mayusculas la primera letras de un texto:

     let saludito = 'hola';
     let primeraLetra = saludito[0].toUpperCase();

      console.log(primeraLetra);
      let restoDelSaludo = saludito.slice(1);

      console.log(restoDelSaludo)
      let nuevoSaludo = primeraLetra + restoDelSaludo;

      console.log(nuevoSaludo);


    




  

