//console.log(countries)
//alert('Open the console and check if the countries has been loaded')
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
/*
countries.forEach((element) => console.log(element))
names.forEach((penis) => console.log(penis))
numbers.forEach((aNumber) => console.log(aNumber))
*/
const upperCaseCountries = countries.map((element) => element.toUpperCase())
console.log(upperCaseCountries);
