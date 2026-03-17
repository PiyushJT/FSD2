// Write node js script and json to perform below tasks.
// 1. Write below object in txt file named s2.txt
// {d:{a:10,b:20,c:[30,10]}}
// 2. Read data from the same file and perform the below tasks.
// a. addition of a and b.
// b. subtraction of 2nd element of c and b. (Must be positive value)
// c. multiplication of elements of c.
// 3. Add the Output of addition, subtraction and multiplication below the object in
// s2.txt file.

var fs=require("fs");
data ={d:{a:10,b:20,c:[30,10]}}
fs.writeFileSync("f2.txt",JSON.stringify(data)+"\n")
d = fs.readFileSync("f2.txt", "utf-8");
console.log(d);
data1 = JSON.parse(d);
add = data1.d.a + data1.d.b;
sub = Math.abs(data1.d.c[1] - data1.d.b);
mul = data1.d.c[1] * data1.d.c[0];
fs.appendFileSync("f2.txt", add + "\n" + sub + "\n" + mul+"\n");
