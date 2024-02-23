let plainText = document.getElementById("plainText");
let cipherText = document.getElementById("cipherText");
let encryptButton = document.getElementById("krypter");
let clearButton = document.getElementById("clear")
let decryptButton = document.getElementById("decrypt")
var plainTextEncrypted = document.getElementById("plainTextEncrypted");
var cipherTextDecrypted = document.getElementById("cipherTextDecrypted")
var encryptedString = "Ciphertext: ";
var decryptedString = "Plaintext: ";

//Opgave 1.4 - del 1:
//Lav en side i HTML5 med:
//- et textarea til indtastning af almindelig tekst, der skal krypteres med Caesar Cipher
//- en button der udløser en krypteringsfunktion
//- et textarea til visning af den krypterede tekst
//- en button der udløser en dekrypteringsfunktion
//- et textarea til visning af den dekrypterede tekst
//Krypterings- og dekrypteringsfunktionerne skal laves i Vanilla JavaScript

encryptButton.onclick = function convertPlaintext() {
    var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    console.log(alphabet);
    let shift = 3;

    for (count = 0; count < plainText.value.length; count++){
        if (plainText.value[count] != " ")
        {
            let character = plainText.value[count];
            let alphabetIndex = alphabet.indexOf(character);
            let newIndex = (alphabetIndex + shift);
            let newCharacter = alphabet[newIndex];
            encryptedString += newCharacter;

        }
        if (plainText.value[count] == " ")
        {
            encryptedString += " "
        }
    }

    plainTextEncrypted.innerHTML = encryptedString;
}

clearButton.onclick = function remove() {
    plainTextEncrypted.innerHTML = "";
    cipherTextDecrypted.innerHTML = "";
    encryptedString = "Ciphertext: ";
    decryptedString = "Plaintext: ";
}

decryptButton.onclick = function convertCipherText() {
    var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let shift = 3;

    for (count = 0; count < cipherText.value.length; count++){
        if (cipherText.value[count] != " ")
        {
            let character = cipherText.value[count];
            let alphabetIndex = alphabet.indexOf(character);
            let newIndex = (alphabetIndex - shift);
            let newCharacter = alphabet[newIndex];
            decryptedString += newCharacter;

        }
        if (cipherText.value[count] == " ")
        {
            decryptedString += " "
        }
    }

    cipherTextDecrypted.innerHTML = decryptedString;
    
}



