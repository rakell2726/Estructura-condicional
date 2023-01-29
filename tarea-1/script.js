/* Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera:

Si trabaja 40 horas o menos se le paga $16 por hora
Si trabaja más de 40 horas se le paga $16 por cada una 
de las primeras 40 horas y $20 por cada hora extra.
*/

//Entrada
let hw;
let salario=0;
let he=0;
let ht=0;



//proceso
hw = Number(prompt('Ingresar horas trabajadas'));
he=hw-40
ht=hw-he

if (hw <= 40) {
   salario = hw * 16;
}
else {
    salario = (ht*16)+(he*20) ;
}

alert('Total a pagar del salario es: '+ salario);
