import React from 'react';

const Content = () =>{
    return(
        <div>
           <h3>Sia - California Dreamin.mp3</h3>
            <p>Основной контент !!!!!!</p>
        </div>
    )
};

export default Content;

console.log('Post server');

const up = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('preparing data');
        const status = {
            text: 'Hello world',
            tel: 684245568,
            status: 'online'
        };
        resolve(status)
    }, 2000)
});

up.then(data =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            data.component = 'hell to heaven';
            resolve(data)
        },2000)
    });
}).then((clientData) =>{
    console.log('Finish data', clientData)
});


const dilay = (ms)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, ms)
    })
};

dilay(2000).then(()=> console.log('2 seconds'));

const url = 'https://jsonplaceholder.typicode.com/todos';

function fetch() {
    console.log('Start');
     return dilay(2000)
         .then(() => fetch(url))
         .then(response => response.json())
}

fetch()
    .then(data =>{
       console.log('Data: ', data)
    });



// async function fetchAsinc() {
//     console.log('Start');
//  await dilay(2000);
//   const response = await fetch(url);
//     const data = await response.json();
//     console.log('Data: ', data)
// }
//
// fetchAsinc();




// const people = [
//     {name: 'Sasha', age:26, cache: 1000},
//     {name: 'Sergei', age:29, cache: 1200},
//     {name: 'Lora', age:40, cache: 4000},
//     {name: 'Vado', age:45, cache: 8000},
//     {name: 'Julya', age:22, cache: 9000},
// ];

// for (let i=0; i<people.length; i++){
//     console.log(people[i])
// }

// for (let person of people){
//     console.log(person)
// }

//forEach
// people.forEach(preson => console.log(preson));


//Map

// const newMas = people.map((person)=>{
//     return `${person.name}: ${person.age}`
// });
// console.log(newMas);

//Filter

// const result =[];
// for (let i=0; i<people.length; i++){
//     if (people[i].age>=30){
//         result.push(people[i])
//     }
// }
// console.log(result)

// const result = people.filter(person => person.age>=27);
//     console.log(result);

//Reduce
// const mount = people.reduce((total, person) =>{
//    return total + person.cache
// },0);
// console.log(mount);

//Find

// const vado = people.find(person => person.name ==='Vado');
// console.log(vado);
