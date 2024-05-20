const formula = document.querySelector('form');
const correo = document.getElementById("campoemail").value;
const passwd = document.getElementById("campopwd").value;

let correovalid;
if (correo ==='') {
    correovalid = false;
} else {
    correovalid = true;
}

let passwdvalid;
if (correo ==='') {
    passwdvalid = false;
} else {
    passwdvalid = true;
}
formula.addEventListener('submit', NoEnviar)

function NoEnviar(event) {
    if (!correovalid) {
        event.preventDefault(); 
        alert("email vacio");
    }else{
        alert("email joya");
    }

    if (!passwdvalid) {
        event.preventDefault(); 
        alert("password vacio");
    }else{
        alert("password joya");
    }
   }


console.log (correovalid, passwdvalid);