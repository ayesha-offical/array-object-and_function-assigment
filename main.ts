// 1 QUESTION OF ANSWER

let people :any ={
    frinds:[]
}

type Frinds ={
    firstname:string,
    lastname:string,
    id?:string
}

let friends1 : Frinds={
    firstname:"khadija",
    lastname:"faisal",
}

let friends2 :Frinds={
    firstname:"mama",
    lastname:"ami",
}
let friends3:Frinds={
    firstname:"haleema",
    lastname:"sadia",
}
people.frinds.push(friends1,friends2,friends3)
console.log(people);

//2 QUESTION OF ANSWER

const scrambledarray=["student", "of", true, 124, "am", "a", "GIAIC", "I" ];
scrambledarray.splice(2,4)
scrambledarray.unshift("I", "am", "a")
scrambledarray.pop()
console.log(scrambledarray.join(" "))

//3 QUESTION OF ANSWER

let inventory = [];

type Product = {
  name: string;
  model: string;
  cost: number;
  quantity: number;
};

let product1: Product = {
  name: "corola",
  model: "Nightshade Edition",
  cost: 5969000,
  quantity: 5000000,
};

let product2: Product = {
  name: "buggati",
  model: "the Mistral",
  cost: 1393570000,
  quantity: 100090,
};
let product3: Product = {
  name: "land cruiser",
  model: "250",
  cost: 33428343,
  quantity: 20000,
};
inventory.push(product1,product2,product3)
 console.log(inventory)
console.log(inventory[2].name)
console.log(inventory[0].model)
console.log(inventory[1].quantity)


//4 QUESTION OF ANSWER

// Student interface


 interface Students {
   name:string,
   isSenior:boolean,
   assigmentCompleted:boolean
 }

 let student:Students []=[
  { name:"ayesha",
   isSenior:true,
   assigmentCompleted:false
 },
 {
   name:"khadija",
   isSenior:true,
   assigmentCompleted:true
 },
 {name:"unknown",
   isSenior:true,
   assigmentCompleted:true
 }
 ];


 function seniorstudentassigment (student:Students[]): Students[]{
   return student.filter(student => student.isSenior && student.assigmentCompleted);
 }

 function updateClassList(student:Students[]): Students[]{
  return student.filter(student => !student.isSenior || (student.isSenior && student.assigmentCompleted));
 }