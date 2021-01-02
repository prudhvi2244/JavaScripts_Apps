colors=['red','green','blue','orange']

console.log(colors)
console.log('Size of array :',colors.length)

console.log('Processing Array Elements Using Normal For Loop')

for(var i=0;i<colors.length;i++)
{
    console.log(colors[i])
}

console.log('Processing Array Elements Using array forEach method')

colors.forEach(function(color)
{
    console.log(color)
});

console.log('Processing Array Elements Using for ... in loop')

for(color in colors)
{
    console.log(colors[color])
}

console.log('Processing Array Elements using for ... of loop')


for(color of colors)
{
    console.log(color)
}

var newColors=colors.map(function(color)
{
    return color.toUpperCase()
})

console.log(colors)
console.log(newColors)

var fiveLengthColors=colors.filter(function(color)
{
          return color.length>4
 
})


console.log(fiveLengthColors)

var numbers=[10,10,90]

var sum=numbers.reduce(function(n1,n2){
    return n1+n2
})

console.log('Sum is :',sum)

var names=['Raj','Prudhvi','Praveen']

var a1=names.join('-')

console.log(names)
console.log(typeof(a1))
console.log(a1.toUpperCase())

names.concat()
