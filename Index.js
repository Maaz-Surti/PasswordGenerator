let textfield1 = document.querySelector(".passwordfield1")
let textfield2 = document.querySelector(".passwordfield2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 14

let password = ""

function getRandomIndex() {

    return Math.floor(Math.random() * characters.length)

}

function getRandomPassword() {

    for (let i = 0; i<= passwordLength - 1; i++) {

        password += characters[getRandomIndex()]
    } 

}


function generatePassword() {

    getRandomPassword()
   textfield1.textContent = password
   password = ""
   getRandomPassword()
   textfield2.textContent = password
   password = ""

}

function firstFieldSelected() {

        
}