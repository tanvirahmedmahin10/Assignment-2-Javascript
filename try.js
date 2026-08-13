function counter(){
    let count=0;
    return function(){
        count++
        return count
    }
}
let newCounter=counter()

// console.log(newCounter())

let arr=[10];

const[a=6,b=a+5,c=5+b]=arr

const person=[{ name:'mahin',age:19},{name:'adas',age:20}]

const sa=person.map((putki)=>putki.age=putki.age*10)

const person2=[
 {name: 'mahin',age:15},
 {name: 'rahim',age:15},
 {name:'karim',age:14}
]
// const newPerson=(das)=>{
//     console.log('send an email',das)
// }


const sa2=person2.find((putki)=>putki.age==15)
console.log(sa2)

// person2.forEach((user)=>{
//     console.log('send email to',user.name)
// })
