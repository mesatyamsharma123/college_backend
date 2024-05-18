const mongoose=require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.mongo_URL).then(()=>{
    console.log('connect')
})
.catch((err)=>{
    console.log(`could nor `+err);
})