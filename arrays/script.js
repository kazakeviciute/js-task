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





const newData = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
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

