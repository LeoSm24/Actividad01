/*
Descripcion: Bienvenida y que navegador estamos usando
Desarrolador: Leonardo Suarez Maraz
Fecha: 04/21/2024
Cambios:Ninguno
*/

//Escribir un programa donde nos de la bien venida y nos indique en que navegador estamos ejecutando

//Esta funcion realiza un cambio en el elemento encontrando el ID en html como"title", cambiando asi "!Hola Mundo", por "Bienvenido, estas usando Mozilla firefox", esto es posible con el metodo innerHTML.
function changename(){
    document.getElementById("title").innerHTML = "Bienvenido, estas usando Mozilla Firefox"
}
changename();


