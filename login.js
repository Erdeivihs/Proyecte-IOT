export {Login}
import {Main}from "./menu.js"
import {Registrar}from "./registrarse.js"

class Login{
    constructor(){}
    
    mostrarLogin(){
        let div = document.querySelector("#principal");
        div.innerHTML =`<section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">
                  <form id="formLogin">
                  <div class="mb-md-5 mt-md-4 pb-5">
      
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>

                    <div style="color:red;" id="resultats"></div>

                    <div class="form-outline form-white mb-4">
                        <label class="form-label" for="Email">Email</label>
                      <input type="email" name="email" id="Email" class="form-control form-control-lg" />
                      
                    </div>
      
                    <div class="form-outline form-white mb-4">
                        <label class="form-label"for="Password">Password</label>
                      <input type="password" name="password" id="Password" class="form-control form-control-lg" />
                      
                    </div>
      
                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
      
                    <a class="btn btn-outline-light btn-lg px-5" id="menuPrincipal">Login</a>
      
                  </div>
      
                  <div>
                    <p class="mb-0">Don't have an account? <a id="registrarse" class="text-white-50 fw-bold">Sign Up</a></p>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <script src="https://www.markuptag.com/bootstrap/5/js/bootstrap.bundle.min.js"></script>`;

    document.querySelector("#menuPrincipal").addEventListener("click",function(event){
      console.log("Hola que tal");
      let datosFormData = new FormData(document.querySelector("#formLogin"));
      let objecteFormData = Object.fromEntries(datosFormData);
      objecteFormData.returnSecureToken = true;
      let datos = JSON.stringify(objecteFormData);
      console.log(datos);
      event.preventDefault();

      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCP1b9tjxPz73e1lSQmkfQ5GJYJL-P_9Po",
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
        //user.innerHTML = `Login: ${datos.email}`;

        localStorage.setItem("idToken", datos.idToken);
        localStorage.setItem("email", datos.email);
        
        let menu = new Main();
        menu.main();
      })
      .catch((error) => {
        console.error("Error;", error);
        resultats.innerHTML = error;
      });

    });
    
      document.querySelector('#registrarse').addEventListener("click", function(){
        let registre = new Registrar();
        registre.mostrarReistre();
    });

    }

    
}



  


    