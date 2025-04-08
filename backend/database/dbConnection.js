import mongoose from "mongoose";

export const dbConnection = ()=> {
    mongoose.connect("mongodb+srv://shubshinde8381:abcd1234@cluster0.cfoo6.mongodb.net/?retryWrites=true", {
        dbName: "MERN_STACK_APPOINTMENT_SYSTEM"
    }).then(()=> {
        console.log("Connected to DB")
    }).catch(err=> {
        console.log(`Some error occured: ${err}`)
    })
}