function getAge(personsAge) {
    console.log(`${personsAge} žmogaus metai yra ${personsAge * (35 / 5)} šuns metai`)

}
getAge(5)

function booksPerYear (desiredNumber) {
    console.log('norint perskaityti ' + desiredNumber + ' knygų per metus, vienai knygai perskaityti turėsi ' + Math.round (360 / desiredNumber) + ' dienas')

}

booksPerYear(10)

function daysToWeeks (daysNumber) {
    console.log(`${daysNumber} dienos yra ${daysNumber / 7} savaitės`)
}

daysToWeeks(35)


function daysToYears (daysNumber) {
    console.log(daysNumber + ' dienos yra ' + Math.round(daysNumber / 365) + ' metai' )
}

daysToYears(365)

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną parametrą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function yearsToHours (yearsNumber) {
    console.log(`${yearsNumber} metai turi ${yearsNumber * 43800 / 5} valandas`)
}

yearsToHours(5)

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.