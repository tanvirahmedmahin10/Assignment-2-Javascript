// const number=[1,2,3,4,5,6]

// const arr=[]
// for(const num of number){
//     if(num%2===0){
//         console.log('even is ',num)
//         arr.push(num);
        
        
//     }
// }
// console.log(arr)

function myfunction(putki){
    const arr=[]
    sum=0;
for(const num of putki){
    
    if(num%2===0){
        sum+=num
        arr.push(num);
        
        
    }
    
}
return arr;
return sum;
}

const number=[1,2,3,4,5,6]
const newNum=[89,31,42,53,62,86,52]
console.log(myfunction(newNum))
