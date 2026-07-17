// Write a script to define a schema having fields like
// name,age,gender,email.
// Apply following validations:
// (1) name field must remove leading/trailing spaces,minimum and
// maximum length should be 3 & 10 respectively
// (2) age must accept a value from 1<=age<=100 only.
// (3) Perform Email ID validation on Email field.
// (4) gender must accept values in small letters only and allowed
// values are “male” & “female” only.


const mg = require("mongoose")
const validator = require("validator")
mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});

const mySchema = new mg.Schema(
    {
        name: {
            type: String,
            trim: true,
            minlength: 3,
            maxlength: 10,
            required: true
        },
        age: {
            type: Number,
            min: 1,
            max: 100,
            required: true
        },
        gender: {
            type: String,
            enum: ["male", "female"],
            required: true
        },
       email:{
        type:String,
        required: true,
        validate: {
            validator: function(value) {
                return validator.isEmail(value);
            },
            message: "Please enter a valid email address"
        }
    }
});

const person = new mg.model("person", mySchema)

const createDoc = async () => {
    try {
        const personData = new person({name: "test", age: 25, gender: "male",  email: "mrdwarkesh65@gmail.com"});

        const result = await personData.save();
        console.log(result);
    }
    catch (error) {
        console.error("Error creating document:", error);
    }
}
createDoc()