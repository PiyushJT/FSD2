// Map following SQL queries to MongoDB query:
// (1) alter table people add joiningDate datetime
// (2) alter table people drop column joiningDate
// (3) select age,name from people where status="PH"
// (4) select * from people where status!="PH"
// (5) select name from people order by age desc

db.createCollection("people");

1> db.people.updateMany({}, { $set: { joiningDate: new Date() } });

2> db.people.updateMany({}, { $unset: { joiningDate: "" } });

3> db.people.find({ status: "PH" }, { age: 1, name: 1, _id: 0 });

4> db.people.find({ status: { $ne: "PH" } });

5> db.people.find({}, { name: 1, _id: 0 }).sort({ age: -1 });

