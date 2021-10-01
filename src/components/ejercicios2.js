import React from 'react';

const Ejercicios2 = () => {


    //async y await
     //ejemplo de objets.values

    const ApiKey="8f32c9780bd185984d9e0872463f7792";
    const municipio="soyapango"
    const consultarClima = async () => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${municipio},sv&appid=${ApiKey}`;
          try {
            const resultado = await fetch(url).then(response => response.json());
            //const resultado = await respuesta.json();
            console.log("este es el resultado: ", resultado);

            //ejemnplo para objets.values
            Object.values(resultado).map((value) => {
                //extrayendo todos los values del objeto valuesO
                console.log("values de Resultado ", value)
            });

            //lo mismo seria para objest.keys solo que en ves de devolver los valores devolveria las llaves
            Object.keys(resultado).map((key) => {
                //extrayendo todos los values del objeto valuesO
                console.log("Keys de Resultado ", key)
            });

            
           return resultado;
           
          } catch (error) {
            console.log(error)
            }
        
      };
      consultarClima();


    //ejemplo String.includes
    //nos sirve para ver si un string contiene un caracter
    const pssword = "Pssword2021$$";
    pssword.includes("$$") ? console.log("El string si contiene el caracter comparado") : console.log("El string no contiene el caracter comparado")
    pssword.includes("E") ? console.log("El string si contiene el caracter comparado") : console.log("El string no contiene el caracter comparado")

    //Ejemplo de Array.From
    //crea una nueva instancia de Array a partir de un objeto iterable

    const num=[1,2,3,4];
    const suma=num.reduce((a,b)=>a+b);

    const arrayNum=Array.from([1, 2, 3, 4], x=>x*1);
    const suma2=arrayNum.reduce((a,b)=>a+b);
    console.log("arrary normal", suma);
    console.log("array convertido", suma2);

    //ejemplo Array.keys con for of
    //nos devuelve las claves de los indeices para acceder a cada elemento del array

    const elementos=["Valor 1", "Valor 2", "Valor 3","Valor 4", "Valor 5", "Valor 6","Valor 7", "Valor 8", "Valor 9"]

    const iterator = elementos.keys();
    console.log("iterator", iterator)

    for (const key of iterator) {
        // console.log(key);
        console.log("Valores del Array: ", elementos[key])
      }

    //ejemplo array.findindex

    let ranks = [1, 5, 7, 8, 10, 7];
    let index = ranks.findIndex((rank) => rank === 7);
    //nos devolvera el indice del primer 7 que encuentre
    console.log("index devuelto por metodo findIndex", index);


   //ejemplo Object.entries
   //nos retorna un array con [key, value] del objeto tomado de referencia

   const obj = {
       nombre: 'Wilfredo',
       apellido: 'Granados',
       edad: 23,
       carrera: 'Ingenieria Computacion'
   }

   const entries = Object.entries(obj);
   console.log("Valor de retorno de Entries", entries)






    return (
<>
<p>From ejercicios</p>
</>

      );
}
 
export default Ejercicios2;