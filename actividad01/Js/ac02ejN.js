/*
Descripcion: Validacion Login
Desarrolador: Leonardo Suarez Maraz
Fecha: 04/21/2024
Cambios:Ninguno
*/

/*
Escribir un programa donde nos solicite un usuario y contraseña, validar la contraseña con “D153n0W3b2” y el usuario debería ser cualquiera de los siguientes nombres: juan, pedro, maria, raul.*/

let users = ["juan","pedro","maria","raul"];
let passwd = "D153n0W3b2";

//la funcion login realiza una peticion al usuario mediante un cuadro editable, el cual le pedira que ingrese su usuario y luego la contrasena y validara de acuerdo a los usuarios que se encuentran dentro de "users", y passwd, si coinciden se dara ingreso a la pagina de lo contrario se deniega.
function login(){
    let usuario = prompt("Ingrese Usuario");
    let contra = prompt("Ingrese una contrasena");
    if (users.includes(usuario) && passwd === contra) {
        alert("Ingresaste a la pagina");
    } else {
        alert("Acceso denegado");
    }
}
login();




