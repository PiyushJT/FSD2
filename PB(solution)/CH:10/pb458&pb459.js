// Create a schema using Schema() constructor having name, surname,
// age, active and date fields. Name must accept strings and it is a
// required field. Age must accept numeric values only. Active must
// accept true/false. Date should have default today's date if it is not
// entered

const mg=require("mongoose")
mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});

const mySchema=new mg.Schema(
    {
        name:{type:String,required:true},
        Surname:String,
        age:Number,
        active:Boolean,
        date:{type:Date,default:new Date().toLocaleDateString()}
    }
);

const person=new mg.model("person",mySchema)

const createdoc = async () => {
    try {
        const personData = new person({name:"test", Surname:"XYZ", age:3, active:true})
        const result = await personData.save();
        console.log(result);    
    }
    catch(error)
    { console.error("Error creating document"); }
}
createdoc()

// How can we enter multiple documents in a database using express
// JS?

const createmultidoc = async () => {
    try {
        const personData = new person([
            {name:"test1", Surname:"XYZ1", age:25, active:true},
            {name:"test2", Surname:"XYZ2", age:30, active:false}
        ]);
        const result = await personData.save();
        console.log(result);
    }
    catch(error) {
        console.error("Error creating multiple documents");
    }
}
createmultidoc()