/*
var employee={
    eid:1,
    ename:'Prudhvi',
    ecity:'Bangalore'
}


var employees=[
    {eid:1,ename:'Prudhvi',ecity:'Bangalore'},
    {eid:2,ename:'Prakash',ecity:'Bangalore'},
    {eid:3,ename:'Pavan',ecity:'Bangalore'},
    {eid:4,ename:'Prasad',ecity:'Bangalore'},
    {eid:5,ename:'Praveen',ecity:'Bangalore'}
]

console.log(typeof(employee))
console.log(employee)

console.log('Employee ID :',employee.eid)
console.log('Employee Name:',employee.ename)
console.log('Employee City :',employee.ecity)

for(employee1 in employee)
{
    console.log(employee[employee1])
}


console.log('*********************')

employees.forEach(function(employee)
{
    console.log('Employee ID :',employee.eid)
    console.log('Employee Name :',employee.ename)
    console.log('Employee City :',employee.ecity)
    console.log('****************************************')
})

console.log('---------------------------------------------------------------')
employees.map(function(employee)
{
    console.log('Employee ID :',employee.eid)
    console.log('Employee Name :',employee.ename.toUpperCase())
    console.log('Employee City :',employee.ecity)
    console.log('****************************************')
})

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-==-==-=-=-=-=-=--=')

for(employee of employees)
{
    console.log('Employee ID :',employee.eid)
    console.log('Employee Name :',employee.ename.toUpperCase())
    console.log('Employee City :',employee.ecity)
    console.log('****************************************')
}

console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><>')

for(employee in employees)
{
    console.log('Employee ID :',employees.employee[0])
    console.log('Employee Name :',employees[employee[1]])
    console.log('Employee City :',employees[employee[2]])
    console.log('****************************************')
}


*/


let employee={
    eid:1,
    ename:'Raj',
    emails:['raj@gmail.com','prudhvi.spring@gmail.com'],
    married:true,
    isSenior:function(experience)
    {
        return experience>12
    },
    technologies:['Java 14','MEAN Stack','Python','Django','Groovy'],
    address:{
        street:'Electronic City',
        pincode :2442424,
        city:'Bangalore'
    }
}

console.log(employee)


console.log('Is ',employee.ename, ' Senior : ',employee.isSenior(13))
console.log('Adress of Employee')

console.log('Employee Street :',employee.address.street)
console.log('Employee Technology -1 :',employee.technologies[0])
console.log('Employee Technology -2 :',employee.technologies[1])

//function : function


/*

    syntax to define function in java script:

    function functionName(parameters)
        {
            return returnValue
        }

*/

//ES6 Features



class Employee
{
    constructor()
    {
        console.log('Employee Class Constructor')
    }
}


var e1=new Employee()
var e2=new Employee()
var e3=new Employee()



