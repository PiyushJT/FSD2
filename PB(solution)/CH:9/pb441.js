// Map following SQL queries to MongoDB query:
// (1) update employee set name="TTT" where age not in {12,33,44,55}
// (2) select count(*) from employee where age>23
// (3) update employee set age=age+10

db.createCollection("employee");

1> db.employee.updateMany({ age: { $nin: [12, 33, 44, 55] } }, { $set: { name: "TTT" } });

2> db.employee.find({ age: { $gt: 23 } }).count();

3> db.employee.updateMany({}, { $inc: { age: 10 } });