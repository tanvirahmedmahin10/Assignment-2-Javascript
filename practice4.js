let array=[{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]


let newArr=array[0]

for(let sa of array ){
    if(sa.rating>newArr.rating){
        newArr=sa
    }

}


    console.log(newArr.name.toUpperCase())

