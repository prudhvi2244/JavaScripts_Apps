function f1()
{
    console.log('Welcome to f1() Normal Function')
}

f1()

/*
        (parameters)=>{
             body
            return returnValue;
            }
*/

let f2=()=>console.log('Welcome To Arrow Function in ES6')
f2()


function greet(name)
{
    console.log('Good Evening :',name)
}


greet('Raj')


let wish=name=>console.log('Good Evening :',name)

wish('Prudhvi')


function add(a,b)
{
    return a+b
}

console.log('Addition :',add(90,10))

let mul=(a,b)=>a*b

console.log('Multiplication :',mul(10,2))














