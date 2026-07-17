// Consider following student collection:
// [
//  {_id:123433,name: "SSS",age:22},
//  {_id:123434,name: "YYY",age:2},
//  {_id:123435,name: "PPP",age:32},
// ]
// Do as directed:
// (1) Update name=”JJJ” and age=40, where age=20 occurs. Insert new
// document, if record is not found.
// (2) To retrieve age and name fields of documents having names
// “YYY” & “SSS”. Don’t project _id field

const mg = require("mongoose")

mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});

const mySchema = new mg.Schema(
    {name: String, age: Number}
);

const student = new mg.model("student", mySchema)

const createmultidoc = async () => {
    try {
        const studentData = new student([   
            {name: "SSS", age: 22},
            {name: "YYY", age: 2},
            {name: "PPP", age: 32}
        ]);
        const result = await studentData.save();
        console.log(result);
    }
    catch(error) {
        console.error("Error creating multiple documents");
    }
}
createmultidoc()

const updateDoc = async () => {
    try {
        const result = await student.updateOne(
            { age: 20 },
            { $set: { name: "JJJ", age: 40 } }
        );
        console.log(result);
    }
    catch(error) {
        console.error("Error updating document");
    }
}
updateDoc()

const retrieveDoc = async () => {
    try {
        const result = await student.find(
            { name: { $in: ["YYY", "SSS"] } },
            { age: 1, name: 1, _id: 0 }
        );
        console.log(result);
    }
    catch(error) {
        console.error("Error retrieving documents");
    }
}
retrieveDoc()