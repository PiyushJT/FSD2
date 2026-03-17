// create a json object wich contain array of object calculate paremeter of sequare and paremeter of 
//   by using side value and diameter value respectivlywrite object as well as shape.txt file


const shape =
    [
        {
            name: "circle",
            diameter: 8
        },
        {
            name: "square",
            side: 10
        }
    ]
var ps = require("fs");
ps.writeFileSync("shape.txt", JSON.stringify(shape));
data = ps.readFileSync("shape.txt", "utf-8");
b = JSON.parse(data);
var perimeter = (b[0].diameter / 2) * 3.14 * 2; //2*3.14*r (here r=diameter/2)
console.log(perimeter);
var peri = (b[1].side) * 4; //4*side
console.log(peri);
ps.appendFileSync("shape.txt", "\nPerimeter of circle = " + perimeter + "\nPerimeter ofsquare = " + peri);
