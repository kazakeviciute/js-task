let password = 'fjkskljshkfyyyyyyyyyyyy'

console.log(password)
console.log(password.length)

if (password.length < 16) {
    console.log("Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.")
  } else if (password.indexOf("#") == -1) {
    console.log("Slaptažodis privalo turėti grotažymes")
  } else if (password.length < 21) {
    console.log("Slaptažodis tinkamas. Tačiau rekomenduojama, jog jis būtų bent 21 simbolio ilgumo.")
  } else {
    console.log("Slaptažodis yra tinkamas")
  }

let age = +(prompt('Įveskite savo amžių'))
console.log(age)

  if (!Number.isInteger(age)) {
    console.log("Netinkamai nurodytas amžius, amžius privalo būti skaičius.")
  }	else if (age < 0) {
    console.log("Amžius yra per mažas.")
  } else if (age > 120) {
    console.log("Amžius yra per didelis.")
  } else if (age < 6) {
    console.log("Į mokyklą neina.")
  } else if (age == 6) {
    console.log("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.")
  } else if (age >=7 && age < 10) {
    console.log("Eina į pradinę klasę.")
  } else if (age == 10) {
    console.log("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.")
  } else if (age >= 11 && age < 14) {
    console.log(msg = "Eina į pagrindinę.")
  } else if (age == 14) {
    console.log("Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.")
  } else if (age >= 15 && age < 18) {
    console.log("Eina į gimnaziją.")
  } else if (age == 18) {
    console.log("Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.")
  } else if (age >= 19) {
    console.log("Mokyklą baigė.")
  }