// Consider following student collection:
// [
//  {_id:123433,name: "SSS",age:22},
//  {_id:123434,name: "YYY",age:2},
//  {_id:123435,name: "PPP",age:32},
// ]
// Do as directed:
// (1) Update name=”JJJ” and age=40, where age=20 occurs. Insert new
// document, if record is not found.
// (2) To retrieve age and name fields of documents having names “YYY” &
// “SSS”. Don’t project _id field.

db.createCollection("student");

db.student.insertMany([
    { _id: 123433, name: "SSS", age: 22 },
    { _id: 123434, name: "YYY", age: 2 },
    { _id: 123435, name: "PPP", age: 32 }
]);

1> db.student.updateOne(
    { age: 20 },
    { $set: { name: "JJJ", age: 40 } },
    { upsert: true }
);

2> db.student.find({ name: { $in: ["YYY", "SSS"] } }, { age: 1, name: 1, _id: 0 });

