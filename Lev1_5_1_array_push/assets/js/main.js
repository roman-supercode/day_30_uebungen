// ! Die push()-Methode fügt neue Elemente am Ende eines Arrays hinzu.

// Definiere ein Array songs, das folgendes enthält:
const musicSongs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];

// Füge diesem Array deine 3 Lieblingslieder mit dem Befehl songs.push("Sweet Child O'Mine"); hinzu.
musicSongs.push("ADD", "Shrimp Shack", "Guided by Angels");
// Speichere das Array als Variable totalSongs.
const totalSongs = musicSongs;
console.log(totalSongs);

// Gebe totalSongs in der Konsole aus.
console.log(totalSongs); // 6
console.log(musicSongs); // Komplettes Array

// Definiere ein Array besteFussballerAllerZeiten, das folgendes enthält:
const besteFussballerAllerZeiten = ["Peter", "Steffi", "Sofia", "Akansel", "Steffen"];
// Füge 3 Torhüter hinzu.
besteFussballerAllerZeiten.push("Chuck", "Arnold", "Sylvester");
// Gebe es in der Konsole aus.
console.log(besteFussballerAllerZeiten); // komplettes Array

// Füge Songs zum Array hinzu, die dir nicht gefallen.
musicSongs.push("keine Ahnung", "Ich mag alle Songs");
console.log(totalSongs);
// Füge die besten 3 Trainer aller Zeiten zu Array hinzu.
besteFussballerAllerZeiten.push("keine Ahnung", "ich nix Fußball", "lieber Handball");
console.log(besteFussballerAllerZeiten);


