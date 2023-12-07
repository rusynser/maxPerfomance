import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const router=express.Router();
import { UserModel } from "../models/users.js";



router.post("/registration",async(req,res)=>{
    const {email,name,password}=req.body;
    const user =await UserModel.findOne({name});
    res.json(user);
    if(user){
        return res.json({message:"user exist"});
    }
    //const hashedPass =await bcrypt.hash(password,10);
    //const newUser=new UserModel({email,name,password});
    //await newUser.save();
    //res.json({ message: "User registered successfully" });
});



router.post("/login",async(req,res)=>{
    const {email,name,password}=req.body;
    const user =await UserModel.findOne({email});

    if(!user){
        return res.json({message:"user doesnt exist"});
    }
    const isPassValid =await bcrypt.compare(password,user.password);
    if(!isPassValid){
        return res.json({message:"Username or password is incorect"});
    }

const token=jwt.sign({id: user._id},"secret");
res.json({token,userID:user._id});
});


export {router as userRouter};