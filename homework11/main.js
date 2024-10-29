//task1
const student = [1.2, 'Ryan', 'bio'];
const obj = student.reduce ((key, value) => {
    key[value] = value;
    return key;
}, {} );
console.log(obj);

//task 1 modified
const student2 = [1.2, 'Ryan', 'bio'];
const keys = ["mark", "name", "subject"];

const obj2 = student.reduce((key, value, index) => {
  key[keys[index]] = value; 
  return key;
}, {});

console.log(obj2);

//task2 
const athletes = [
    [ 'height', 170 ],
    [ 'weight', 80 ],
    [ 'sport', 'rugby' ],
    [ 'full name', 'John Doe' ],
    [ 'hobby', 'sing' ],
    [ 'speed', 90 ]
  ];

  const athletesObj = athletes.reduce((obj, [key, value]) => {
    obj[key]=value;
    return obj ;
  }, {});

  console.log(athletesObj);

//task3
const object = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe'};
function valuesToString(obj){
const values = Object.values(obj);
return values.join(',');
}
console.log(valuesToString(object));

//task 4
function objToTypesInObject(obj){
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, typeof value])
    );
}
 console.log(objToTypesInObject(object));
