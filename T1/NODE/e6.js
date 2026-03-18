// write a node js script to handle events as ask below 1.check the radius is negative or not if negative then display radius must be possitive else calculate the parameter of the circle 2. check side is negative or not if negative then display side must be possitive else calculate the parameter of the square 3. check length and breadth is negative or not if negative then display length and breadth must be possitive else calculate the parameter of the rectangle
const e = require("events");

const ee = new e();
ee.on("circle", (radius) => {
    if (radius < 0) {
        console.log("radius must be positive");
    } else {
        const parameter = 2 * Math.PI * radius;
        console.log(`parameter of the circle: ${parameter}`);
    }
});
ee.on("square", (side) => {
    if (side < 0) {
        console.log("side must be positive");
    } else {
        const parameter = 4 * side;
        console.log(`parameter of the square: ${parameter}`);
    }
}); 

ee.emit("circle", 5);
ee.emit("square", 4);   