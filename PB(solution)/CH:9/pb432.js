// Create a collection named Student having fields Name, age, standard,
// percentage. Insert 5 to 10 random documents in collection.
// 1.	Find name of all students having age > 7
// 2.	Increase the standard for all students by 1.
// 3.	Arrange all the records in ascending order of age.
// 4.	Show the name of student who is the oldest student among all students.
// 5.	Delete the record of the student if standard is 12.

db.createCollection("Student");

db.student.insertMany([
  { Name: "Alice", age: 8, standard: 3, percentage: 85 },
  { Name: "Bob", age: 9, standard: 4, percentage: 90 },
  { Name: "Charlie", age: 7, standard: 2, percentage: 75 },
  { Name: "David", age: 10, standard: 5, percentage: 95 },
  { Name: "Eve", age: 11, standard: 6, percentage: 88 },
  { Name: "Frank", age: 12, standard: 7, percentage: 92 },
  { Name: "Grace", age: 13, standard: 8, percentage: 80 },
]);

1> db.Student.find({ age: { $gt: 7 } }, { Name: 1, _id: 0 });

2> db.Student.updateMany({}, { $inc: { standard: 1 } });

3> db.Student.find().sort({ age: 1 });

4> db.Student.find().sort({ age: -1 }).limit(1).project({ Name: 1, _id: 0 });

5> db.Student.deleteMany({ standard: 12 });
