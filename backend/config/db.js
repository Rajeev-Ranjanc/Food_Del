import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('{mongodb+srv://rajeevranjan:<rajeevranjan>@cluster0.cy7tp.mongodb.net/ }/FOOD_DEL 2').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.