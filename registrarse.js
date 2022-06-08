export{Registrar}
import{Login}from "./login.js"
class Registrar{
    constructor(){}

    mostrarReistre(){
        let div = document.querySelector("#principal");
        div.innerHTML =`<section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card bg-dark text-white" style="border-radius: 15px;">
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Formulari de Registre</h3>
                  <form id="registre">
      
                  <div style="color:red;" id="resultats"></div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                      
      
                        <div class="form-outline">
                          <input type="text" id="usuario" name="user" class="form-control form-control-lg" />
                          <label class="form-label" for="usuario">User</label>
                        </div>
      
                      </div>
                      <div class="col-md-6 mb-4">
      
                        <div class="form-outline">
                          <input type="email" name="email" id="correo" class="form-control form-control-lg" />
                          <label class="form-label" for="correo">Email</label>
                        </div>
      
                      </div>
                    </div>
      
                    <div class="row">
                      <div class="col-md-6 mb-4 d-flex align-items-center">
      
                        <div class="form-outline">
                          <input type="password" id="pass" name="password" class="form-control form-control-lg" />
                          <label class="form-label" for="pass">Password</label>
                        </div>
      
                      </div>
                    
                    </div>
      
                    <div class="mt-4 pt-2">
                      <a id="boton" class="btn btn-outline-light btn-lg px-5">Submit</a>
                    </div>

                      <br>
                    
                    <div>
                      <p class="mb-0"><a id="volver" class="text-white-50 fw-bold">Volver al Login</a></p>
                    </div>
      
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script src="https://www.markuptag.com/bootstrap/5/js/bootstrap.bundle.min.js"></script>`;


      document.querySelector("#boton").addEventListener("click", function(event){

        let datosFormData = new FormData(document.querySelector("#registre"));
        let objecteFormData = Object.fromEntries(datosFormData);
        objecteFormData.returnSecureToken = true;
        delete objecteFormData.user;
        let datos = JSON.stringify(objecteFormData);
        console.log(datos);
        event.preventDefault();

        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCP1b9tjxPz73e1lSQmkfQ5GJYJL-P_9Po",
          {
            method: "post",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: datos,
          }
        )

        .then((response) => {
          if (response.ok) return response.json();
          // else throw Error(response.statusText);
          else {
            return response.json().then((text) => {
              console.log(text);
              throw new Error(text.error.message);
            });
          }
        })
        .then((datos) => {
          resultats.innerHTML = JSON.stringify(datos);

          localStorage.setItem("id",datos.localId);      
          localStorage.setItem("email",datos.email);   

          let id = localStorage.getItem("id");
          let email = localStorage.getItem("email");

          fetch("https://daw2021-2022-default-rtdb.firebaseio.com/Marcadona/Usuaris/"+id+".json",
          {
            method: "put",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: fetch("https://daw2021-2022-default-rtdb.firebaseio.com/Marcadona/Usuaris/"+id+"/Email.json",
            {
              method: "put",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify(email),
            }),
          })

          console.log(datos);
          let login = new Login();
          login.mostrarLogin();
         
        })
        .catch((error) => {
          console.error("Error;", error);
          resultats.innerHTML = error;
        });

      });

      document.querySelector("#volver").addEventListener("click",function () {
        
        let login = new Login();
        login.mostrarLogin();

      });
    }

}