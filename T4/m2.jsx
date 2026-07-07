// database name : detail  collection name : student document : 3 insertmany 

const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/data7")
.then(()=>{console.log("success")})
.catch((err)=>{console.log(err)})
mg.pluralize(null)

const mySchema = new mg.Schema({
    name: {type: String, required: true},
    surname: String,
    age: Number,
    active: Boolean,
    date: {type: Date, default:new Date().toLocaleDateString()}
})

const student = mg.model("student", mySchema)

const createDocs = async () => {
    try {
        // const students = [
        //     {
        //         name: "Alice",
        //         surname: "Smith",
        //         age: 22,
        //         active: true
        //     },
        //     {
        //         name: "Bob",
        //         surname: "Johnson",
        //         age: 25,
        //         active: false
        //     },
        //     {
        //         name: "Charlie",
        //         surname: "Brown",
        //         age: 28,
        //         active: true
        //     }
        // ]
        // const result = await student.insertMany(students)
        // console.log("Documents inserted successfully", result)

        // update value of active to true where name is radha if document is not available then create a new docment display updated result on cosole
        // const result = await student.updateOne(
        //     { name: "radha" },
        //     { $set: { active: true } },
        //     { upsert: true }
        // )
        // console.log("Document updated successfully", result)
// retrive person aname and id of person on console of 1 document
       const result = await student.findOne({name:"radha"})
       console.log(result.name, result._id)
    //    update  person employe age and active status and display updated status by using id 
      const updateResult = await student.findByIdAndUpdate(
        result._id,
        { age: 40, active: false },
        { new: true }
      )
      console.log("Document updated successfully", updateResult)
    //   findbyid and delete the document and display deleted document on console USE IF ELSE
    
      const deletedResult = await student.findByIdAndDelete(result._id)
      console.log("Document deleted successfully", deletedResult)
    } catch (error) {
        console.error("Error inserting documents:", error)
    }
}

createDocs()

