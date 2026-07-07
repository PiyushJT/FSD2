const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/ljku")
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

const person=mg.model("person", mySchema)

const createDoc=async ()=>{
    try{
        const p1=new person({
            name: "John",
            surname: "Doe",
            age: 30,
            active: true
        })
      const result = await p1.save()
        console.log("Document saved successfully", result)
    } catch (error) {
        console.error("Error saving document:", error)
    }
}

createDoc()
