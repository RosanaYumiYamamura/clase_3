/*Estructura de Control - Selección
Ejercicio – Par/Impar
​
•Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá informarlo */
​
import * as rls from "readline-sync";
​
const n1: number = rls.questionInt("Ingrese N° a evaluar: ");
​
if  (n1 == 0){
    console.log("El N° ingresado es 0 (Cero).")
}   
​
else{  
    const numStr: string = n1.toString(); // convierte el número en una cadena
    const unit: string = numStr.slice(-1); // obtiene el último caracter de la cadena
​
    if (unit == "0" || unit == "2" || unit == "4" || unit == "6" || unit == "8") {
    console.log("El número es PAR.")    
    }
    else {
        console.log("El número es IMPAR.")
    }
​
}
ERROR FALTA AUMENTODESUELDO.TS