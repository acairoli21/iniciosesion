const formula = document.querySelector('form');

formula.addEventListener('submit', NoEnviar)

function NoEnviar(event) {
    if (validarcampos()) {
        event.preventDefault(); 
        document.getElementById("advierte").textContent="Alguna credencial vacía";
        Swal.fire({
            title: "Bienvenido!",
            text: "Olvidaste tu susario o contraseña?",
            timer: 2000 ,
            icon: "error"
          }); 
    }else{
        document.getElementById("advierte").textContent="Credenciales correctas";
        Swal.fire({
            title: "Bienvenido!",
            text: "Ahora entrarás a tu espacio de compras",
            timer: 5000 ,
            icon: "success"
          }); 
         // alert("ssf")
    }  
   }

function validarcampos() {
let correo = document.getElementById("campoemail").value;
let passwd = document.getElementById("campopwd").value;
console.log (correo, passwd);
if (correo ==='' || passwd === '') {
    return true;
} else {
    return false;
}
}

