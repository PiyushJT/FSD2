// Create a collection name Student. Having fields name, age, std, percentage.
// 1)insert 3 random records in table.
// 2)find name of all student age>5.
// 3) update the std for all by 1.
// 4) arrange all the record of descending order of age
// 5)show all the name of student who is the oldest student of all records

db.createCollection("Student");

db.Student.insertMany([
    { name: "John", age: 6, std: 1, percentage: 80 },
    { name: "Jane", age: 7, std: 2, percentage: 85 },
    { name: "Jim", age: 8, std: 3, percentage: 90 }
]);

1> db.Student.find({ age: { $gt: 5 } }, { name: 1, _id: 0 });

2> db.Student.updateMany({}, { $inc: { std: 1 } });

3> db.Student.find().sort({ age: -1 });

4> db.Student.find().sort({ age: -1 }).limit(1).project({ name: 1, _id: 0 });