//test 1
const users = [ {firstName : "Susan", lastName: "Steward"},
{firstName : "Daniel", lastName: "Longbottom"},
{firstName : "Jacob", lastName: "Black"}
];

const output=users.map(temp =>(
   (temp.firstName+' '+temp.lastName)
))
//test 2
const creatures = [ {name: "Shark", habitat: "Ocean"},
{name: "Whale", habitat: "Ocean"},
{name: "Lion", habitat: "Savanna"},
{name: "Monkey", habitat: "Jungle"}
];

const output2= creatures.filter(item =>(
    item.habitat === 'Ocean'
))
// test 3 
const input=[1, 3, 6, 8, 11]

const number=input.filter(number => number>7)
