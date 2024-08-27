// let User = {
//     name:"Yuvaraj dekhane",
//     id:"1234"
// }
//
// function getData(obj:{name:string,id:string,password?:number}){
//     console.log(obj.name,obj.id);
// }
//
//
// function CheckData(id:number){
//     if(id == 5){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function getDetails(id : string|number){
//     if(typeof id == "string"){
//         console.log(id.toUpperCase())
//     }else{
//         console.log(id);
//     }
// }
//
// CheckData(5);
// getDetails(23);
// getData(User);
// // getData(obj:{name:"MA",id:"123"});


const car : { price: number; model: string; type: string } = {
    type:"toyoto",
    model:"Corroto",
    price:2009,
}
console.log(car);

//
// //// ENUMS IN THE TYPE SCRIPT[IS NOT A VALID ENUM]
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
// }
// let currentDirection = CardinalDirections.North;
// console.log(currentDirection);
//
// /// FULLY ENUMS INITIALIZED
// enum Vehicle {
//     SuperCar = "Farari",
//     NormalCar = "BMW"
// }


enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
}
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);