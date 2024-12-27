import chalk from 'chalk';
import express from 'express';
import colors from colors;

//rest object
const app= express();

//rest api
app.get('/',(req,res) => {
   res.send('<h1>Welcome to Mern stack project</h1>');
});

//port
const PORT= process.env.PORT || 8000;
//listen
app.listen(PORT,()=>{
    console.log((`server running on ${process.env.DEV_MODE} on mode${PORT}`.bgCyan.white));

});
