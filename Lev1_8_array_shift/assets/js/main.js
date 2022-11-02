// ! Die Methode shift() entfernt das erste Element eines Arrays.

//Definiere deutscheGerichte (die du kennen solltest) mit einem Array, das enthält: 
const deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
console.log(deutscheGerichte);
//Füge zum Array 5 deutsche Gerichte mit dem Befehl unshift() hinzu
deutscheGerichte.unshift("Brezel", "Knödel", "Reibekuchen", "Kartoffelsalat", "Schweinshaxe");
console.log(deutscheGerichte);

// Verwende das deutscheGerichte-Array aus der vorherigen Übung.
// Entferne aus dem Array 3 Werte mit Hilfe der Methode shift();
//Speichere diese als Array nichtGut.

//Gib diese Variable in der Konsole aus.
const nichtGut = [deutscheGerichte.shift(), deutscheGerichte.shift(), deutscheGerichte.shift()];
console.log(nichtGut);
