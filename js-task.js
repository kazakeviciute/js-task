// let password = 'fjiyyyyyyyyyyy'

// console.log(password)
// console.log(password.length)

// if (password.length < 16) {
//     console.log("Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.")
//   } else if (password.indexOf("#") == -1) {
//     console.log("Slaptažodis privalo turėti grotažymes")
//   } else if (password.length < 21) {
//     console.log("Slaptažodis tinkamas. Tačiau rekomenduojama, jog jis būtų bent 21 simbolio ilgumo.")
//   } else {
//     console.log("Slaptažodis yra tinkamas")
//   }

// let age = +(prompt('Įveskite savo amžių'))
// console.log(age)

//   if (!Number.isInteger(age)) {
//     console.log("Netinkamai nurodytas amžius, amžius privalo būti skaičius.")
//   }	else if (age < 0) {
//     console.log("Amžius yra per mažas.")
//   } else if (age > 120) {
//     console.log("Amžius yra per didelis.")
//   } else if (age < 6) {
//     console.log("Į mokyklą neina.")
//   } else if (age == 6) {
//     console.log("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.")
//   } else if (age >=7 && age < 10) {
//     console.log("Eina į pradinę klasę.")
//   } else if (age == 10) {
//     console.log("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.")
//   } else if (age >= 11 && age < 14) {
//     console.log(msg = "Eina į pagrindinę.")
//   } else if (age == 14) {
//     console.log("Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.")
//   } else if (age >= 15 && age < 18) {
//     console.log("Eina į gimnaziją.")
//   } else if (age == 18) {
//     console.log("Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.")
//   } else if (age >= 19) {
//     console.log("Mokyklą baigė.")
//   }



let correctAnswer11 = 'sun'
let correctAnswer12 = '579'

let playerAnswer11 = 'sun'
let playerAnswer12 = '579'


if (playerAnswer11 === correctAnswer11 && playerAnswer12 === correctAnswer12) {
    console.log('Patekai i kita lygi: abu atsakymai teisingi.') 
} else if (playerAnswer11 !== correctAnswer11 && playerAnswer12 !== correctAnswer12) {
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi') 
} else if (playerAnswer11 !== correctAnswer11 && playerAnswer12 === correctAnswer12) {
    console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else if (playerAnswer12 !== correctAnswer12 && playerAnswer11 === correctAnswer11) {
    console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
}
    

if (playerAnswer11 === correctAnswer11 && playerAnswer12 === correctAnswer12) {
    console.log('Patekai i kita lygi: abu atsakymai teisingi.') 
} else if (playerAnswer11 !== correctAnswer11 && playerAnswer12 !== correctAnswer12) {
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi') 
} else if (playerAnswer11 !== correctAnswer11 && playerAnswer12 === correctAnswer12) {
    console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas')
} else if (playerAnswer12 !== correctAnswer12 && playerAnswer11 === correctAnswer11) {
    console.log('Nepatekai i kita lygi: antras atsakymas buvo neteisingas')
}


let correctAnswer31 = 'sun'
let correctAnswer32 = '579'
let correctAnswer33 = 'blue'

let playerAnswer31 = 'sun'
let playerAnswer32 = '579'
let playerAnswer33 = 'blue'

if (playerAnswer31 === correctAnswer31 && playerAnswer32 === correctAnswer32 && playerAnswer33 === correctAnswer33) {
    console.log('Patekai i kita lygi: visi atsakymai teisingi.') 
} else if (playerAnswer31 !== correctAnswer31 && playerAnswer32 !== correctAnswer32 && playerAnswer33 !== correctAnswer33) {
    console.log('Nepatekai i kita lygi: visi atsakymai neteisingi.')
} else if (playerAnswer31 !== correctAnswer31 && playerAnswer32 === correctAnswer32 && playerAnswer33 === correctAnswer33) {
    console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, kiti teisingi.') 
} else if (playerAnswer31 === correctAnswer31 && playerAnswer32 !== correctAnswer32 && playerAnswer33 === correctAnswer33) {
    console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, kiti teisingi.') 
} else if (playerAnswer31 === correctAnswer31 && playerAnswer32 === correctAnswer32 && playerAnswer33 !== correctAnswer33) {
    console.log('Patekai i kita lygi: trečias atsakymas buvo neteisingas, kiti teisingi.') 
} else if (playerAnswer31 === correctAnswer31 && playerAnswer32 !== correctAnswer32 && playerAnswer33 !== correctAnswer33) {
    console.log('Nepatekai i kita lygi, pirmas atsakymas buvo teisingas.') 
} else if (playerAnswer31 !== correctAnswer31 && playerAnswer32 === correctAnswer32 && playerAnswer33 !== correctAnswer33) {
    console.log('Nepatekai i kita lygi, antras atsakymas buvo teisingas.') 
} else if (playerAnswer31 !== correctAnswer31 && playerAnswer32 !== correctAnswer32 && playerAnswer33 === correctAnswer33) {
    console.log('Nepatekai i kita lygi, trečias atsakymas buvo teisingas.') 
}


let isOnline = true 
let name = 'Tom'
let time = 18
let isBirthday = false

