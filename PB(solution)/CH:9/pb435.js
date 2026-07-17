// Map following SQL queries to MongoDB query:
// (1) select age,name from employee where status="active"
// (2) select * from employee where status!="active"
// (3) select name from employee order by age desc
// (4)select * from employee where status=”active” or age=50

db.createCollection("employee");

1> db.employee.find({ status: "active" }, { age: 1, name: 1, _id: 0 });

2> db.employee.find({ status: { $ne: "active" } });

3> db.employee.find({}, { name: 1, _id: 0 }).sort({ age: -1 });

4> db.employee.find({ $or: [{ status: "active" }, { age: 50 }] });