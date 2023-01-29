/* 
Hacer un algoritmo que imprima el nombre de un artículo, 
clave, precio original y su precio con descuento. 
El descuento lo hace en base a la clave. Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento es del 20% (solo existen dos claves).
*/

//Entrada
let nombre;
let clave;
let preciob;
let descuento=0;
let preciocd=0;
//proceso
nombre = prompt('Ingresar nombre del articulo');
clave = prompt('Ingresar clave del articulo');
preciob = Number(prompt('Ingresar el precio originar del articulo'));

if (clave == 01) {
    descuento = preciob*0.10;
    preciocd = preciob - descuento;
    console.log('El nombre del articulo es: '+nombre);
    console.log('la clave es: '+clave);
    console.log('El precio base del articulo es: '+preciob);
    console.log('precio con descuento: '+preciocd);
} else {
    if (clave == 02) {
        descuento = preciob*0.20;
        preciocd = preciob - descuento;
        console.log('El nombre del articulo es: '+nombre);
        console.log('la clave es: '+clave);
        console.log('El precio base del articulo es: '+preciob);
        console.log('precio con descuento: '+preciocd);

} else {
        console.log('se produjo un error');
    }
}

