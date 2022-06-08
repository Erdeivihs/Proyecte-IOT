export { Comida };
import {Main}from "./menu.js";


class Comida{

    constructor(){}

    mostrarComida(comida){

        const url = "https://daw2021-2022-default-rtdb.firebaseio.com/Marcadona/"+comida;
        let productes = [];

        console.log(comida);
        let main = new Main();
        main.menu();
        cambiar();
        Comida();

        async function Comida(){
            await fetch(url + ".json")
            .then((response) => response.json())
            .then((datos) => {
              console.log(datos);
              for (let key in datos) {
                datos[key].id = key;
                productes.push(datos[key]);
              }
              let divProductes = document.querySelector("#contenido");
              divProductes.innerHTML = "";
              productes.map((p) => {
                let divProducte = document.createElement("div");
                divProducte.id = "comida";
                divProducte.innerHTML = `<h2>${p.Nom}</h2><p>${p.Precio}</p><img src="./img/${p.Nom}.png">`;
                divProductes.append(divProducte);
              });
            });
        }

          function cambiar() {
                let menu = document.querySelector("#menu");
                let tipus = document.querySelector("#"+comida);
                menu.className = "nav_link";
                tipus.className = "nav_link active";
            
            
          }

    }

}