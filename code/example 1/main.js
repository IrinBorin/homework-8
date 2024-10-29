const JohnyDepp = {
    name: 'John',
    surname: 'Depp',
    age: 61,
    hobby: ['cricket', 'golf', 'singing', 'actor'],
    films: {
        1999: ['Pirates-1', 'Edward Scissorhands'],
        2003: ['Pirates-2', 'Pirates -3'],
        2001: ['Pirates- 4', 'Cocoaine'],
    },
    singing: function() {
        console.log('I am singing')
    }
}
console.log(JohnyDepp.name);
console.log(JohnyDepp['name']);
const request = "age";
console.log(JohnyDepp[request]);

JohnyDepp.height = 175;
console.log(JohnyDepp);

delete JohnyDepp.age;
console.log(JohnyDepp);

for(let k in JohnyDepp) {
    console.log(k);
    console.log(JohnyDepp[k]);
}

console.log(JohnyDepp['films']['1999'][0]);
JohnyDepp.singing();

const RikkiMartinShow = {
time: '17-00',
place: 'Berlin',
price: '100',
duration:'4',
}

console.log ('age' in JohnyDepp);
console.log ('name' in JohnyDepp);

const human = {
    limbs: 4,
    walking: function(){
        console.log('I am walking');

    }

}
Object. setPrototypeOf(JohnyDepp, human);
JohnyDepp.walking();