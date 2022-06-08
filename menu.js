export { Main };
import { Login } from "./login.js";
import { Formulari } from "./formulari.js";
import { Comida } from "./comida.js";

class Main {
  constructor() {}
  
  main() {

    this.menu();
    mostrarMenu();

    function mostrarMenu() {
      let div = document.querySelector("#contenido");
      div.innerHTML = `<h1>Bienvenido a Marcadona</h1>`;
    }
    
    
    document.querySelector("#menu").addEventListener("click", function (event) {
      const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          bodypd = document.getElementById(bodyId),
          headerpd = document.getElementById(headerId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
          toggle.addEventListener("click", () => {
            // show navbar
            nav.classList.toggle("show");
            // change icon
            toggle.classList.toggle("bx-x");
            // add padding to body
            bodypd.classList.toggle("body-pd");
            // add padding to header
            headerpd.classList.toggle("body-pd");
          });
        }
      };

      showNavbar("header-toggle", "nav-bar", "body-pd", "header");

      /*===== LINK ACTIVE =====*/
      const linkColor = document.querySelectorAll(".nav_link");
      console.log(linkColor);

      function colorLink() {
        if (linkColor) {
          linkColor.forEach((l) => l.classList.remove("active"));
          this.classList.add("active");
        }
      }
      linkColor.forEach((l) => l.addEventListener("click", colorLink));

      // Your code to run since DOM is loaded and ready
    });

  
  }

   menu() {
    let div = document.querySelector("#principal");
    div.innerHTML = ` 
      <head>
      <link rel="stylesheet" href="css/menu.css">
      <script src="https://kit.fontawesome.com/b7a8925b02.js" crossorigin="anonymous"></script>
      </head>
      <body id="body-pd">
      <div class="l-navbar" id="nav-bar">
          <nav class="nav">
              <div>
              <a href="#" id="menu" class="nav_link active"><i class="fa-solid fa-house"></i> <span class="nav_logo-name">BBBootstrap</span> </a>
                  <div class="nav_list"> 
                      <a href="#" id="form" class="nav_link"> 
                          <i class="fa-solid fa-file-waveform"></i> <span class="nav_name">Formulari</span> 
                      </a>
                      <a href="#" id="Verdura" class="nav_link"> 
                          <i class="fa-solid fa-carrot"></i> <span class="nav_name">Verdura</span> 
                      </a> 
                      <a href="#" id="Fruta" class="nav_link"> 
                          <i class="fa-solid fa-apple-whole"></i> <span class="nav_name">Fruta</span> 
                      </a> 
                      <a href="#" id="Carne" class="nav_link"> 
                          <i class="fa-solid fa-drumstick-bite"></i> <span class="nav_name">Carne</span> 
                      </a>
                      <a href="#" id="Pescado" class="nav_link"> 
                        <i class="fa-solid fa-fish-fins"></i> <span class="nav_name">Pesacdo</span> 
                      </a> 
                  </div>
              </div> 
              <a href="#" id="logOut" class="nav_link"> 
              
                  <i class="fa-solid fa-arrow-right-from-bracket"></i> <span class="nav_name">SignOut</span> 
              </a>
          </nav>
      </div>
      <!--Container Main start-->
      <div class="bg-light">
         <div id="contenido"></div>
      </div>
      <!--Container Main end-->
  `;

      document.querySelector("#menu").addEventListener("click", function Form() {
        let menu = new Main();
        menu.main();
      });

      document.querySelector("#logOut").addEventListener("click", function Form() {
        let login = new Login();
        login.mostrarLogin();
      });

      document.querySelector("#form").addEventListener("click",function(){
          let form = new Formulari();
          form.formulari();
      });

      document.querySelector("#Verdura").addEventListener("click",function(){
        let comida = new Comida();
        comida.mostrarComida("Verdura");
    });

    document.querySelector("#Carne").addEventListener("click",function(){
      let comida = new Comida();
        comida.mostrarComida("Carne");
    });

    document.querySelector("#Fruta").addEventListener("click",function(){
      let comida = new Comida();
        comida.mostrarComida("Fruta");
    });

    document.querySelector("#Pescado").addEventListener("click",function(){
      let comida = new Comida();
        comida.mostrarComida("Pescado");
    });
  }
  
}
