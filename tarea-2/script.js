/* 
una persona enferma, que pesa 70kg,
se encuentra en reposo y desea saber cuántas calorías consume su 
cuerpo durante todo el tiempo que realice una misma actividad.
Las actividades que tiene permitido realizar son únicamente dormir y 
estar sentado en reposo. Los datos que tiene son que estando dormido 
consume 1.08 calorías por minuto y estando sentado en reposo consume 
1.66 calorías por minuto.
*/

//Entrada
let act;
let tiempo;
let calorias=0;

//proceso
act = prompt('Ingresar la actividad dormido=1 o reposo =2');
tiempo = Number(prompt('Ingresar el tiempo en minutos de la actividad'));

if (act == 1) {
    calorias=tiempo*1.08;
    alert('las calorias obtenidas mientra durmio es: ' +calorias);
} else {
    if (act == 2) {
        calorias=tiempo*1.66;
    alert('las calorias obtenidas mientra durmio es: ' +calorias);
    } else {
        alert('La actividad no esta permitidad');
    }
}


