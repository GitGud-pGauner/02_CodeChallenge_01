
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/


// let zahl1 = prompt("Gib die erste Zahl ein:");
// let zahl2 = prompt("Gib die zweite Zahl ein:");

// let summe = parseInt(zahl1) + parseInt(zahl2);

// console.log("Die Summe der Zahl ist: " + summe);

// let zahl1 = prompt(x)
// let zahl2 = prompt(y)

// console.log(zahl1 + zahl2)




var zahl1 = prompt("Gib die erste Zahl ein:");
var zahl2 = prompt("Gib die zweite Zahl ein:");

// Die Prompt-Eingaben werden standardmäßig als Zeichenketten behandelt.
// Daher müssen wir sie in Zahlen umwandeln, um die Summe zu berechnen.
var summe = parseInt(zahl1) + parseInt(zahl2);

console.log("Die Summe der Zahlen ist: " + summe);