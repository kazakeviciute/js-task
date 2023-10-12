const data = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

console.log(data)
console.log(data.length)

const slicedData1 = data.slice(0, 1)
console.log(slicedData1)

const slicedData2 = data.slice(26)
console.log(slicedData2)

const slicedData3 = data.slice(1, 2)
console.log(slicedData3)

const slicedData4 = data.slice(25, -1)
console.log(slicedData4)

const slicedData5 = data.slice(7, -19)
console.log(slicedData5)

const slicedData6 = data.slice(18, -8)
console.log(slicedData6)

const slicedData7 = data.slice(13, -13)
console.log(slicedData7)

const slicedData8 = data.slice(0, 3)
console.log(slicedData8)

const slicedData9 = data.slice(24)
console.log(slicedData9)

const slicedData10 = data.slice(0, 10)
console.log(slicedData10)

const slicedData11 = data.slice(17)
console.log(slicedData11)

const slicedData12 = data.slice(2, 8)
console.log(slicedData12)

const slicedData13 = data.slice(18, -4)
console.log(slicedData13)

const slicedData14 = data.slice(10, 19)
console.log(slicedData14)

const slicedData15 = data.slice(10, -8)
console.log(slicedData15)

const slicedData16 = data.slice(1)
console.log(slicedData16)

const slicedData17 = data.slice(0, 26)
console.log(slicedData17)

const slicedData18 = data.slice(5)
console.log(slicedData18)

const slicedData19 = data.slice(0, 22)
console.log(slicedData19)

const slicedData20 = data.slice(0, 13)
console.log(slicedData20)

const slicedData21 = data.slice(14)
console.log(slicedData21)

const slicedData22 = data.slice(1, 26)
console.log(slicedData22)

const slicedData23 = data.slice(5, 24)
console.log(slicedData23)

const slicedData24 = data.slice(1, 19)
console.log(slicedData24)

const slicedData25 = data.slice(7, 26)
console.log(slicedData25)

const slicedData26 = data.slice(9, 15)
console.log(slicedData26)

const slicedData27 = data.slice(10, 19)
console.log(slicedData27)

const slicedData28 = data.slice(7, 19)
console.log(slicedData28)



// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.



const newData = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(newData)

newData.shift()
console.log(newData)

newData.pop()
console.log(newData)

newData.splice(10, 1)
console.log(newData)

newData.splice(-2, 1)
console.log(newData)

newData.splice(1, 1)
console.log(newData)

newData.splice(6, 2)
console.log(newData)

newData.splice(-6, 3)
console.log(newData)

newData.splice(2, 1, 888)
console.log(newData)

newData.splice(9, 1, 33, 789, 6543)
console.log(newData)

newData.splice(14, 1, 321, 654, 987)
console.log(newData)

newData.splice(1, 0, 11)
console.log(newData)

newData.splice(13, 0, 1)
console.log(newData)

newData.splice(-1, 0, -1)
console.log(newData)

newData.unshift(1, 2, 3)
console.log(newData)

newData.push(-333, -321, -312)
console.log(newData)

newData.splice(13, 0, 0)
console.log(newData)

newData.shift()
console.log(newData)

newData.pop()
console.log(newData)

newData.unshift('start')
console.log(newData)

newData.push('end')
console.log(newData)



const nums = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

const filteredNums1 = nums.filter(num => num > 0)
console.log(filteredNums1)

const filteredNums2 = nums.filter(num => num < 0)
console.log(filteredNums2)

const filteredNums3 = nums.filter(num => num % 2 === 0)
console.log(filteredNums3)

const filteredNums4 = nums.filter(num => num % 3 === 0)
console.log(filteredNums4)

const filteredNums5 = nums.filter(num => num % 5 === 0)
console.log(filteredNums5)

const filteredNums6 = nums.filter(num => num % 11 === 0)
console.log(filteredNums6)

const filteredNums7 = nums.filter(num => num % 31 === 0)
console.log(filteredNums7)

const filteredNums8 = nums.filter(num => num % 2 === 0 && num % 3 === 0)
console.log(filteredNums8)

const filteredNums9 = nums.filter(num => num % 3 === 0 && num % 7 === 0)
console.log(filteredNums9)

const filteredNums10 = nums.filter(num => num % 5 === 0 && num % 9 === 0)
console.log(filteredNums10)

const filteredNums11 = nums.filter(num => num % 5 === 0 && num % 11 === 0)
console.log(filteredNums11)

const filteredNums12 = nums.filter(num => num % 2 === 0 && num % 8 === 0 && num % 12 ===0)
console.log(filteredNums12)

const filteredNums13 = nums.filter(num => num % 2 === 0 || num % 3 === 0)
console.log(filteredNums13)

const filteredNums14 = nums.filter(num => num % 3 === 0 || num % 5 === 0)
console.log(filteredNums14)

const filteredNums15 = nums.filter(num => num % 5 === 0 || num % 6 === 0)
console.log(filteredNums15)

const filteredNums16 = nums.filter(num => num % 7 === 0 || num % 8 === 0)
console.log(filteredNums16)

const filteredNums17 = nums.filter(num => num % 9 === 0 || num % 13 === 0)
console.log(filteredNums17)

const filteredNums18 = nums.filter(num => num % 2 === 0 || num % 3 === 0 || num % 5 === 0)
console.log(filteredNums18)

const filteredNums19 = nums.filter(num => num % 5 === 0 || num % 7 === 0 || num % 9 === 0)
console.log(filteredNums19)

const filteredNums20 = nums.filter(num => num % 7 === 0 || num % 8 === 0 || num % 11 === 0)
console.log(filteredNums20)

const filteredNums21 = nums.filter(num => num % 9 === 0 || num % 12 === 0 || num % 13 === 0)
console.log(filteredNums21)

const filteredNums22 = nums.filter(num => num > 100)
console.log(filteredNums22)

const filteredNums23 = nums.filter(num => num > 555)
console.log(filteredNums23)

const filteredNums24 = nums.filter(num => num >= 888)
console.log(filteredNums24)

const filteredNums25 = nums.filter(num => num >= 6789)
console.log(filteredNums25)

const filteredNums26 = nums.filter(num => num < 50)
console.log(filteredNums26)

const filteredNums27 = nums.filter(num => num < 1000)
console.log(filteredNums27)

const filteredNums28 = nums.filter(num => num <= -1)
console.log(filteredNums28)

const filteredNums29 = nums.filter(num => num <= -5564)
console.log(filteredNums29)

const filteredNums30 = nums.filter(num => num < 1000 && num > 500)
console.log(filteredNums30)

const filteredNums31 = nums.filter(num => num < 100 && num > 0)
console.log(filteredNums31)

const filteredNums32 = nums.filter(num => num < 0 && num > -50)
console.log(filteredNums32)

const filteredNums33 = nums.filter(num => num <= 0 && num > -100)
console.log(filteredNums33)

const filteredNums34 = nums.filter(num => num >= 0 && num < 55)
console.log(filteredNums34)

const filteredNums35 = nums.filter(num => num >= 444 && num <= 654)
console.log(filteredNums35)

const filteredNums36 = nums.filter(num => num > 0 && num % 2 === 0)
console.log(filteredNums36)

const filteredNums37 = nums.filter(num => num > 0 && num % 3 === 0)
console.log(filteredNums37)

const filteredNums38 = nums.filter(num => num < 0 && num % 4 === 0)
console.log(filteredNums38)

const filteredNums39 = nums.filter(num => num < 0 && num % 111 === 0)
console.log(filteredNums39)

const filteredNums40 = nums.filter(num => num > 500 && num % 2 === 0)
console.log(filteredNums40)

const filteredNums41 = nums.filter(num => num > 1000 && num % 3 === 0)
console.log(filteredNums41)

const filteredNums42 = nums.filter(num => num < 1000 && num % 9 === 0)
console.log(filteredNums42)

const filteredNums43 = nums.filter(num => num < 500 && num % 2 === 0)
console.log(filteredNums43)

const filteredNums44 = nums.filter(num => num >= 33 && num % 3 === 0)
console.log(filteredNums44)

const filteredNums45 = nums.filter(num => num >= 444 && num % 12 === 0)
console.log(filteredNums45)

const filteredNums46 = nums.filter(num => num <= 155 && num % 5 === 0)
console.log(filteredNums46)

const filteredNums47 = nums.filter(num => num <= -333 && num % 9 === 0)
console.log(filteredNums47)

const filteredNums48 = nums.filter(num => num > 100 && num < 500 && num % 5 === 0)
console.log(filteredNums48)

const filteredNums49 = nums.filter(num => num >= 888 && num < 1000 && num % 2 === 0)
console.log(filteredNums49)

const filteredNums50 = nums.filter(num => num <= 888 && num >= -333 && num % 3 === 0 && num !== 0)
console.log(filteredNums50)

const filteredNums51 = nums.filter(num => typeof num === 'number')
console.log(filteredNums51)

const filteredNums52 = nums.filter(num => typeof num === 'string')
console.log(filteredNums52)

const filteredNums53 = nums.filter(num => typeof num === 'string' && num.length > 5)
console.log(filteredNums53)

const filteredNums54 = nums.filter(num => typeof num === 'string' && num.length <= 5)
console.log(filteredNums54)

const filteredNums55 = nums.filter(num => typeof num === 'string' && num.length < 7)
console.log(filteredNums55)

const filteredNums56 = nums.filter(num => typeof num === 'string' && num.includes ('t'))
console.log(filteredNums56)

const filteredNums57 = nums.filter(num => typeof num === 'string' && num.includes('y'))
console.log(filteredNums57)

const filteredNums58 = nums.filter(num => (typeof num === 'string') && (num.includes('a') || num.includes('e')) )
console.log(filteredNums58)

const filteredNums59 = nums.filter(num => typeof num === 'string' && num.includes('t') && num.includes('i'))
console.log(filteredNums59)

const filteredNums60 = nums.filter(num => typeof num === 'string' && num.includes('t') && !num.includes('k'))
console.log(filteredNums60)

const filteredNums61 = nums.filter(num => typeof num === 'string' && num.includes('a') && !num.includes('s'))
console.log(filteredNums61)

const filteredNums62 = nums.filter(num => typeof num === 'string' && num.includes('t', 2))
console.log(filteredNums62)

const filteredNums63 = nums.filter(num => typeof num === 'string' && num.includes('st'))
console.log(filteredNums63)

const filteredNums64 = nums.filter(num => typeof num === 'string' && num.includes('nd'))
console.log(filteredNums64)

const filteredNums65 = nums.filter(num => typeof num === 'string' && !num.includes('s'))
console.log(filteredNums65)

const filteredNums66 = nums.filter(num => typeof num === 'string' && !num.includes('t'))
console.log(filteredNums66)

const filteredNums67 = nums.filter(num => typeof num === 'string' && !num.includes('t') && !num.includes('l'))
console.log(filteredNums67)

const filteredNums69 = nums.filter(num => typeof num === 'string' && num.startsWith('s'))
console.log(filteredNums69)

const filteredNums70 = nums.filter(num => typeof num === 'string' && num.startsWith('o'))
console.log(filteredNums70)

const filteredNums71 = nums.filter(num => typeof num === 'string' && num.endsWith('d'))
console.log(filteredNums71)

const filteredNums72 = nums.filter(num => typeof num === 'string' && num.endsWith('s'))
console.log(filteredNums72)

const filteredNums73 = nums.filter(num => typeof num === 'string' && num.length > 4 && num.includes('o'))
console.log(filteredNums73)

const filteredNums74 = nums.filter(num => typeof num === 'string' && num.length >= 5 && num.includes('a'))
console.log(filteredNums74)

const filteredNums77 = nums.filter(num => typeof num === 'string' && num.startsWith(('a'), 2))
console.log(filteredNums77)

const filteredNums78 = nums.filter(num => typeof num === 'string' && num.startsWith(('l'), 3))
console.log(filteredNums78)

const filteredNums79 = nums.filter(num => typeof num === 'string' && !num.includes(('t'), 4) && num.length > 4)
console.log(filteredNums79)


// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.



