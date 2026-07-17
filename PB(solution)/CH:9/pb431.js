// Map following SQL queries to MongoDB query:
// (1)	SELECT * FROM USER WHERE status = "A" ORDER BY age
// DESC
// (2)	UPDATE USER SET age = age + 3 WHERE status = "A"
// (3)	SELECT * FROM USER WHERE status != "A"

db.createCollection("USER");

1> db.USER.find({ status: "A" }).sort({ age: -1 });

2> db.USER.updateMany({ status: "A" }, { $inc: { age: 3 } });

3> db.USER.find({ status: { $ne: "A" } });
