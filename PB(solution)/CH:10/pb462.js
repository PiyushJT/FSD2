// Consider following student collection:
// [
//  {_id:123433,name: "2DD", surname:"GGG", age:22},
//  {_id:123434,name: "LLL", surname:"RRR", age:2},
//  {_id:123435,name: "KKK", surname:"III", age:32}
//  {_id:123436,name: "ZZZ", surname:"TTTT", age:9}
// ]
// Do as directed:
// (1) List all students whose name starts by digit only.
// (2) List all students whose surname has exactly 4 letters only.
// (3) List only names of students from youngest to oldest.
// (4) List all students whose name has 3-10 letters only. Don't allow
// digits & underscore

const mg = require("mongoose")

mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});

const mySchema = new mg.Schema(
    {name: String, surname: String, age: Number}
);
const Student = new mg.model("Student", mySchema);

const createMultiDoc = async () => {
    return await Student.insertMany([
        {_id:123433,name: "2DD", surname:"GGG", age:22},
        {_id:123434,name: "LLL", surname:"RRR", age:2},
        {_id:123435,name: "KKK", surname:"III", age:32},
        {_id:123436,name: "ZZZ", surname:"TTTT", age:9}
    ]);
}

createMultiDoc().then(() => {
    // (1) List all students whose name starts by digit only.
    Student.find({ name: { $regex: '^[0-9]' } })
        .then(result => console.log("Students whose name starts with a digit:", result))
        .catch(err => console.error(err));

    // (2) List all students whose surname has exactly 4 letters only.
    Student.find({ surname: { $regex: '^.{4}$' } })
        .then(result => console.log("Students whose surname has exactly 4 letters:", result))
        .catch(err => console.error(err));
    
    // (3) List only names of students from youngest to oldest.
    Student.find({}, { name: 1, _id: 0 }).sort({ age: 1 })
        .then(result => console.log("Names of students from youngest to oldest:", result))
        .catch(err => console.error(err));

    // (4) List all students whose name has 3-10 letters only. Don't allow digits & underscore
    Student.find({ name: { $regex: '^[A-Za-z]{3,10}$' } })
        .then(result => console.log("Students whose name has 3-10 letters only:", result))
        .catch(err => console.error(err));
})


