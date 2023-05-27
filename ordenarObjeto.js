const orderBy = (array, getter, order = 'asc')=>
{
  array.sort((a,b) => {
    const first = getter(a);
    const second = getter(b);
  // localeCompare retorna un número indicando si una cadena de carateres de referencia va antes, después o si es la misma que la cadena dada en orden alfabético.
    const compare = first.localeCompare(second);
    return order === 'asc'? compare: -compare;
  });
  return array;
}

const people = [
  {name: 'Alice', age: 30},
  {name: 'Bob', age: 20},
  {name: 'Zelda', age: 10},
  {name: 'Ceci', age: 50},
  {name: 'Andres', age: 40},
];
 const resl = orderBy(people, person => person.name);
 console.log(resl);