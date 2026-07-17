// Write commands to perform following tasks on employee collection
// having fields having name,age & joiningDate:
// (1) Delete all records having joiningDate before 1st January, 2010.
// (2) List all employees having age>50 years.
// (3) List only 1st employee having age>60 years.

db.createCollection("employee");

db.employee.insertMany([
    { name: "Alice", age: 55, joiningDate: new Date("2009-12-31") },
    { name: "Bob", age: 45, joiningDate: new Date("2010-01-01") },
    { name: "Charlie", age: 65, joiningDate: new Date("2015-05-05") },
    { name: "David", age: 70, joiningDate: new Date("2008-06-15") }
]);

1> db.employee.deleteMany({ joiningDate: { $lt: new Date("2010-01-01") } });

2> db.employee.find({ age: { $gt: 50 } });

3> db.employee.find({ age: { $gt: 60 } }).limit(1);

