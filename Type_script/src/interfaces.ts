interface User{
    name: string
    id: number
    email: string
}
const printUserData : User = {name:"Yuvaraj",id:515,email: "teamloding8080@gmail.com"};

console.log(printUserData)


interface Rectangle {
    height:number,
    width:number
}
const rectangle:Rectangle = {
    height: 40,
    width:60
}
console.log(rectangle);

/// EXTENDING INTERFACE
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle);

