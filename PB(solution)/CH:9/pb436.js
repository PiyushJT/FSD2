// Write commands to perform following tasks on employee collection
// having fields name,age & joiningDate:
// (1) Insert 3-4 records in collection.
// (2) List all employees who joined before 1st January, 2010.
// (3) Update the name of employee to "WWW" whose joiningDate is "05-05-
// 2015"

db.createCollection("employee");

db.employee.insertMany([
    { name: "Alice", age: 30, joiningDate: new Date("2009-12-31") },    
    { name: "Bob", age: 35, joiningDate: new Date("2010-01-01") },
    { name: "Charlie", age: 28, joiningDate: new Date("2015-05-05") },
    { name: "David", age: 40, joiningDate: new Date("2008-06-15") }
]);

1> db.employee.find({ joiningDate: { $lt: new Date("2010-01-01") } });

2> db.employee.updateOne(
    { joiningDate: new Date("2015-05-05") },
    { $set: { name: "WWW" } }
);