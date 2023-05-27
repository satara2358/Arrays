// metodo Push agrega contenidode su parentesis

const cities = [ 'madrid', 'apsto', 'cali', 'popyan' ];
const total = cities.push('Pasto', 'Santander');
console.log(cities);
console.log(total);

// Metodo Pop quita el ultimo de la lista

const citie = [ 'madrid', 'apsto', 'cali', 'popyan' ];
const last = citie.pop()
console.log(citie);
console.log(last);

// Metodo Shift elimina el primer elemento Array

const citi = [ 'madrid', 'apsto', 'cali', 'popyan' ];
const first = citi.shift();
console.log(citi);
console.log(first);

// Metodo unshift introduce elementos al comienzo del array

const len = citi.unshift('Barcelona', 'Bilbao', 'Grecia')
console.log(len);

//Metodo slice devuelve cipia de una parte del arry desde un inicio y final (<== no incluido) entre ()

const copia = cities.slice(1,3)
console.log(copia);

//Metodo splice cambia el cotenido del array elimando o añadiendo elementos
// cities.splice(start, deleteCount, item1, item2)
const despla = cities.splice(1, 2, 'additem', 'item2')
console.log(despla);

// Includes Buscar dentro de un Array

// const BuscarE = despla.indexOf('additem')
// console.log(BuscarE);
// BuscarE.includes('Pasto')
// console.log(BuscarE);

// Metodo buscar dentro de un array ==> Filter 

const filtro = cities.filter(city => {
  console.log(city);
  return city.length > 2
})
console.log(filtro);

// Metodo Find() devuelve el 1 valor del elemnto q cumpla la condicion 

const found = cities.find( city => {
  console.log(city);
  return city==='Pasto'
})
console.log(found);

// Metodo forEach

const recorrer = cities.forEach( (city, index)  => {
  console.log(`${city} - ${index}`);
})

// Metodo map 

const mapear = cities.map(function(current, index, array){
  console.log(current);
  console.log(index);
  console.log(array);
})