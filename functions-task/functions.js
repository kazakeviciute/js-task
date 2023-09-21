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

function yearsToHours (yearsNumber) {
    console.log(`${yearsNumber} metai turi ${yearsNumber * 43800 / 5} valandas`)
}

yearsToHours(5)

function monthsToHours (monthsNumber) {
    console.log(`${monthsNumber} mėnesiai turi ${monthsNumber * 2190 / 3} valandas`)

}

monthsToHours(3)

function monthsToMinutes (monthsNumber) {
    console.log (`${monthsNumber} mėnesiai turi ${monthsNumber * 87600 / 2} minutes`)

}

monthsToMinutes(2)
