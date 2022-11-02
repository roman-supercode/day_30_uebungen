// ! Unshift und Shift verschieben das gesamte Array seitwärts (durch Hinzufügen und Entfernen von Elementen am Anfang).
// ! Push und Pop verschieben das Array NICHT seitlich(weil sie am Ende Elemente hinzufügen und entfernen).
// ! In jedem dieser Paare(Push / Pop und Unshift / Shift) macht das längere Wort das Array länger.


// Erstelle ein Array und ordne es einer Variablen zu.
// Array mit Werte: 23, 54, 75;
const number = [23, 54, 75];
console.log(number);

// Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.
number.push(20, 21, 22, 23, 24);
console.log(number);
// Verwende die Unshift-Methode, um 5 Werte an der Vorderseite deines Arrays hinzuzufügen.
number.unshift(10, 11, 12, 13, 14);
console.log(number);
// Verwende die Pop-Methode, um 2 Werte von der Rückseite deines Arrays zu entfernen.
number.pop();
number.pop();
console.log(number);
// Verwende die Shift-Methode, um 2 Werte von der Vorderseite deines Arrays zu entfernen.
number.shift(), number.shift();
console.log(number);