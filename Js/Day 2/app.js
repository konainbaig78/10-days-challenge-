// const myObject={
//     car1:'mercedes', car2: " bmw" , car3: "bugatti" , car4: "pagani"

// } 

// for (const key in myObject) {
//     console.log(`my favourite car are as follow  ${key} is ${myObject[key]}`);
    
    
// }


//INHERITANCE 
// class Vehicle {
//     constructor(name) {
//       this.name = name;
//     }
  
//     move() {
//       console.log(`${this.name} is moving.`);
//     }
//   }
  
//   class Car extends Vehicle {
//     honk() {
//       console.log(`${this.name} says Beep Beep!`);
//     }
//   }
  
//   class Bike extends Vehicle {
//     ringBell() {
//       console.log(`${this.name} says Ring Ring!`);
//     }
//   }
  
//   const myCar = new Car('Toyota');
//   myCar.move();  // Toyota is moving.
//   myCar.honk();  // Toyota says Beep Beep!
  
//   const myBike = new Bike('Mountain Bike');
//   myBike.move();     // Mountain Bike is moving.
//   myBike.ringBell(); // Mountain Bike says Ring Ring!
  
//PROMISE

const pizza=new Promise((resolve, reject) => {
    let pizzaDeli=true;
    if(pizzaDeli){
resolve("enjoy")
    }
    else{
        reject("unsatisfied")
    }
})

console.log();
