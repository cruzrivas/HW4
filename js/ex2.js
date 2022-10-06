const numbers = [1,2,3,4,5,6,7,8,9,10]
const oddNumbers = numbers.filter(x => x % 2 !== 0);
console.log(oddNumbers)

const div25Numbers = numbers.filter(x => x % 2 === 0 | x % 5 === 0)
console.log(div25Numbers)

const div3Numbers = numbers.filter(x => x % 3 === 0).map(x => x * x)
console.log(div3Numbers)
div5squared = numbers.filter(x => x % 5 === 0).map(x => x * x).reduce((acc,value) => acc+value)
console.log(div5squared)