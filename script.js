import { Login } from "./login.js";

(()=>{ 

    document.addEventListener("DOMContentLoaded", function () {
      let login = new Login();
      login.mostrarLogin();

    document.querySelector("#logOut").addEventListener("click", function(){
      let login = new Login();
      login.mostrarLogin();
    });


  
    });
})();