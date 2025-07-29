require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

//Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

//Connect to Mongodb
async function connectDB()
{
   try
   {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('✅MongoDB Connected');
   }
   catch (error)
   {    
     console.error('❌MongoDB connection failed:',error);
     process.exit(1);
   }            
}

connectDB();
//Define Mongoose schema and model
//mongoDB is schema-less

const employeeSchema = new mongoose.Schema(
      {
        empNo: {type:Number,required:true},
        empName:{type:String,required:true,unique:true},
        empSal: {type:Number,required:true},
      },
      {
        timestamps: false,
        versionKey: false
      });

      const Employee = mongoose.model('Employee',employeeSchema);
//Get employees by post
app.post('/api/employees',async(req,res)=>{
    try{
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        //res.status(201).json(savedEmployee);
        res.status(201).json({"message":"Employee added successfully...."});
    }
    catch(error){
        res.status(400).json({ message:error.message });
    }
});

//find all 
app.get('/api/employees',async(req,res)=>{
    try{
        
        const employees = await Employee.find();
        res.json(employees);
    }

    catch(error)
    {
        res.status(500).json({ message:error.message });
    }
});

//find all by id
app.get('/api/employees/:id',async(req,res)=>{
    try{
        
        const employee = await Employee.findById(req.params.id);
        if(!employee)
            return res.status(404).json({message:'Employee Not Found'});
          res.json(employee);
    }

    catch(error)
    {
        res.status(500).json({ message:error.message });
    }
});

//DELETE ELEMENT BY ID
app.delete('/api/employees/:id',async(req,res)=>{
    try{
        
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if(!deletedEmployee)
            return res.status(404).json({message:'Employee Not Found'});
            res.json({message:'Employee Deleted Successfully'});
    }

    catch(error)
    {
        res.status(500).json({ message:error.message });
    }
});

//UPDATE ELEMENT
app.put('/api/employees/:id',async(req,res)=>{
    try{
        
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id,
            req.body,{
                new:true,
                runValidators:true
            }
        );
        if(!updatedEmployee)
            return res.status(404).json({message:'Employee Not Found'});
            res.json({message:'Employee Updated Successfully'});
    }

    catch(error)
    {
        res.status(400).json({ message:error.message });
    }
});



app.listen(3001,()=>{
    console.log('🚀Server running on http://localhost:3001');
});