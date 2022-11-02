// ! Unshift und Shift verschieben das gesamte Array seitwärts (durch Hinzufügen und Entfernen von Elementen am Anfang).
// ! Push und Pop verschieben das Array NICHT seitlich(weil sie am Ende Elemente hinzufügen und entfernen).
// ! In jedem dieser Paare(Push / Pop und Unshift / Shift) macht das längere Wort das Array länger.

// Buttons ansprechen
const addChecked = document.getElementById("hinzufuegen");
const undoChecked = document.getElementById("rueckgaengig");
// ul ansprechen
const unorderedList = document.querySelector("ul");

// Globales Array
let input = [];

addChecked.addEventListener("click", () => { // HINZUFÜGEN
    // Eingabe
    const teilnehmer = document.getElementById("teilnehmer").value;

    if (teilnehmer === "") {
        return;
    }
    //Die letze Eingabe wird in den Array "gepusht".
    input.push(teilnehmer);
    console.log(input);
    // Erstellt ein <li> Element und beschreibt es mit dem Value von teilnehmer
    const htmlAusgabe = unorderedList.appendChild(document.createElement("li"));
    htmlAusgabe.innerText = teilnehmer;
    console.log(htmlAusgabe);

    // Reset
    document.getElementById("reset").reset();
});

undoChecked.addEventListener("click", () => { // RÜCKGÄNGIG
    // Entfernt das letzte Element aus dem Array
    input.pop();
    console.log(input);
    // Entfernt das letze <li> Element aus der <ul>
    unorderedList.removeChild(unorderedList.lastChild);
});
