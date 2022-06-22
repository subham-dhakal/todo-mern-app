const mongoose = require('mongoose');
// module.exports = async()=>{
//     try{
//         const connectionParams = {
//             useNewUrlParser: true,
//             // useCreateIndex: true,
//             useUnifiedTopology: true,
//         };
//         await mongoose.connect("mongodb://localhost:27017/todoApp", connectionParams);
//         console.log("Database Connected");  
//     } catch(error){
//         console.log("Couldnot connect to database", error);
//     }
// }

mongoose.connect('mongodb://localhost:27017/todoApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(response=>{
    console.log("Database Connected");
})
.catch(err=>{
    console.log("Couldnot connect to database");
})