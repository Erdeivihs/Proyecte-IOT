export { Formulari };
import { Main } from "./menu.js";


class Formulari{
    constructor(){}
    formulari(){
       let main = new Main();
       main.menu();
       cambiar();
       let div = document.querySelector("#contenido");
       div.innerHTML = `<form class="row g-3" id="formulari">
       <div class="col-md-6">
         <label for="inputEmail4" class="form-label">Nom</label>
         <input type="text" class="form-control" id="nom" name="Nom">
       </div>
       <div class="col-md-6">
         <label for="inputPassword4" class="form-label">Precio</label>
         <input type="text" class="form-control" id="num" name="Precio">
       </div>
       <div class="col-md-4">
         <label for="inputState" class="form-label">State</label>
         <select id="tipus" name="tipus" class="form-select">
           <option selected>Verdura</option>
           <option>Fruta</option>
           <option>Carne</option>
           <option>Pescado</option>
         </select>
       </div>
       <div class="col-12">
         <button id="enviar" type="submit" class="btn btn-primary">Enviar</button>
       </div>
     </form>`;

  function cambiar() {
    let menu = document.querySelector("#menu");
    let form = document.querySelector("#form");
    menu.className = "nav_link";
    form.className = "nav_link active";
  }
  

     document.querySelector("#enviar").addEventListener("click", function (event) {

      let datosFormData = new FormData(document.querySelector("#formulari"));
      let objecteFormData = Object.fromEntries(datosFormData);
      let tipus = objecteFormData.tipus;
      delete objecteFormData.tipus;
      let nom = objecteFormData.Nom;
      let num = objecteFormData.Precio;
      console.log(objecteFormData.tipus);
      //let datos = JSON.stringify(objecteFormData);
      event.preventDefault();

      fetch(
        "https://daw2021-2022-default-rtdb.firebaseio.com/Marcadona/"+tipus+"/"+nom+".json",
        {
          method: "put",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(objecteFormData),
        }
      )
      let form = new Formulari();
      form.formulari();
     });

    }

    

}
    