// Write commands to perform following tasks on employee collection
// having fields having name,age & joiningDate:
// (1) Update the name="Senior citizen" having age>60 years.
// (2) Update the name="JKL" having age=20 years. Insert this record, if it is
// not found.
// (3) Retire all employees by deleting senior citizens from collection

db.createCollection("employee");

db.employee.insertMany([
    { name: "Alice", age: 55, joiningDate: new Date("2009-12-31") },
    { name: "Bob", age: 45, joiningDate: new Date("2010-01-01") },
    { name: "Charlie", age: 65, joiningDate: new Date("2015-05-05") },
    { name: "David", age: 70, joiningDate: new Date("2008-06-15") }
]);

1> db.employee.updateMany({ age: { $gt: 60 } }, { $set: { name: "Senior citizen" } });

2> db.employee.updateOne(
    { age: 20 },
    { $set: { name: "JKL" } },
    { upsert: true }
);

3> db.employee.deleteMany({ age: { $gt: 60 } });

