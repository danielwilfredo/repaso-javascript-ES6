import React from 'react';

const Ejercicios = () => {
    //Ejemplo de map con un metodo de Math Math.pow()
    //la funcion map nos permite recorrer nuestro arreglo y poderlo modificar 
    //y devolver ese nuevo arreglo modificado
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
    const numeroPotencia = numeros.map((numero)=> Math.pow(numero, 2))
    console.log("Ejercicio con .map y Math.pow", numeroPotencia);

    //ejemplo de forEach
    //cumple la misma funcion que map, solamente que forEach no devuelve un arreglo nuevo como si lo hace map

    const nombres = ['Whinds', 'Freeway', 'Test', 'Maria'];

    nombres.forEach(function(nombre, i) {  
        console.log('[forEach]', nombre, i);
    })

    //Ejemplo de Filter
    //metodo de array que nos ayuda a buscar un elemento dentro de un array en donde nos devuelve
    //el elemento encontrado y elimina los que no son iguales
    const palabras = ['hola', 'como', 'estas', 'chichico', 'te', 'amo', 'chichico', 'forever'];

    const resultado = palabras.filter(palabra => palabra ==='chichico');

    console.log("Palabras encontradas con Filter", resultado);



    //Ejemplo de Reduce
    //la funcion reduce nos ayuda a poder reducir un arreglo a un solo valor
    //nos puede ser de utilidad a la hora de hacer un carrito de compras y sacar un resultado total
    //o para sacar un promedio 

    const precios = [52.666, 54.542, 77.311, 100.255, 98.36, 17.598];

    const sumatoriaPrecios=precios.reduce((a,b)=>a+b);
    const precioPromedio=sumatoriaPrecios/precios.length;
    console.log("Precio promedio: ", precioPromedio.toFixed(2));


    //ejemplo de indexOf
    //funcion que nos ayuda a saber el indice de un elemento
    //de un array, si existe nos devuelve el indice, si no existe nos devuelve -1

    const pokemonAgua =["Squirtle","Tentacool","Slowbro","Lapras","Mudkip", "Milotic"];
    const indexPokemonAgua=pokemonAgua.indexOf("Lapras");
    console.log("indice encontrado: ",indexPokemonAgua);
    console.log("pokemon del indice encontrado: ", pokemonAgua[indexPokemonAgua]);

    //ejemplo de some
    //compara todos los elementos del array para ver si al menos existe uno valor igual al dado
    //en la funcion, si hay uno devuelve true, si no hay ninguno devuelve false

    const valores = [5, 7, 8, 10, 6, 5, 8, 6, 1];

    valores.some((valor)=>valor===1) ? console.log("Si existe el valor de 1 en el arreglo") : console.log("No existe ningun valor de 1");
    valores.some((valor)=>valor===2) ? console.log("Si existe el valor de 2 en el arreglo") : console.log("No existe ningun valor de 2");
    //ejemplo de every

    //nos compara el arreglo con el valor dado en la funcion y si todos los valores son iguales devuelve true, si 
    //un valor es diferente devuelve false

    const iguales = [1,1,1,1,1,1,1];
    const diferentes =[1,1,1,1,1,1,1,8];

    iguales.every((valor)=>valor===1) ? console.log("Todos los valores son iguales") : console.log("Hay un valor diferente");
    diferentes.every((valor)=>valor===1) ? console.log("Todos los valores son iguales") : console.log("Hay un valor diferente");

    return (
<>
<p>From ejercicios</p>
</>

      );
}
 
export default Ejercicios;