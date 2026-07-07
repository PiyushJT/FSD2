// defind mongoose for user schema with the following field and validation requirement  
// username: required and must between 4 to 20 characters must start with a letter and end with digit should  be trim any leading or traling whitespace should be converted to uppercase before saving 
// email:must be unique accross the collection abd must folow startander email 
// age: must be a number between 18 and 100
// role:must be either user or admin if value is not provided default to user 

const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/m4")
.then(()=>{console.log("success")})
.catch((err)=>{console.log(err)})

const userSchema = new mg.Schema({
    username: {
        type: String,required: true,
        minlength: 4,
        maxlength: 20,
        match: /^[A-Za-z][A-Za-z0-9]*\d$/,
        trim: true,
        set: v => v.toUpperCase()
    },
    email: {
        type: String,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

const User = mg.model("User", userSchema)

const createUser = async () => {
    try {
        const user = new User({
            username: "JohnDoe1",
            email: "johndoe1@example.com",
            age: 25
        })
        await user.save()
        console.log("User created successfully")
    } catch (error) {
        console.error("Error creating user:", error)
    }
}   

createUser()