// Write commands to perform following tasks on employee collection
// having fields having name,age & joiningDate:
// (1) Count no. of employees having age>=60 years.
// (2) List all employees in descending order of names having names "ABC",
// "PQR", "XYZ".
// (3) List all employees whose age lies between 25 to 50 years excluding all
// rest of the fields.

db.createCollection("employee");

db.employee.insertMany([
    { name: "Alice", age: 55, joiningDate: new Date("2009-12-31") },
    { name: "Bob", age: 45, joiningDate: new Date("2010-01-01") },
    { name: "Charlie", age: 65, joiningDate: new Date("2015-05-05") },
    { name: "David", age: 70, joiningDate: new Date("2008-06-15") },
    { name: "ABC", age: 30, joiningDate: new Date("2012-03-10") },
    { name: "PQR", age: 40, joiningDate: new Date("2013-07-20") },
    { name: "XYZ", age: 50, joiningDate: new Date("2014-11-25") }
]);

1> db.employee.find({ age: { $gte: 60 } }).count();

2> db.employee.find({ name: { $in: ["ABC", "PQR", "XYZ"] } }).sort({ name: -1 });

3> db.employee.find({ age: { $gte: 25, $lte: 50 } }, { _id: 0, name: 1, age: 1 });