// Write query to perform following tasks on employee collection having fields
// name, age, position, salary.
// 1) Insert 3 documents with random data of having fields name, age,
// position, salary.
// 2) Count all employees where age is not equal to 35 and position is “Full
// Stack Developer”.
// 3) Update position of all employees to “Software Developer” whose name
// is “XYZ” and age is equal to 31. If not such document available than insert
// the document with updated values.
// 4) Display position and name of the employee having lowest salary.

db.createCollection("employee");

db.employee.insertMany([
  { name: "Alice", age: 30, position: "Full Stack Developer", salary: 70000 },
  { name: "Bob", age: 35, position: "Full Stack Developer", salary: 80000 },
  { name: "Charlie", age: 31, position: "Software Engineer", salary: 60000 }
]);

1> db.employee.find({ age: { $ne: 35 }, position: "Full Stack Developer" }).count();

2> db.employee.updateOne(
  { name: "XYZ", age: 31 },
  { $set: { position: "Software Developer" } },
  { upsert: true }
);

3> db.employee.find().sort({ salary: 1 }).limit(1).project({ position: 1, name: 1, _id: 0 });