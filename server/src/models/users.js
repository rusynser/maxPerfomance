<<<<<<< HEAD
import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
    _idU: {
        type: 'objectId',
        unique:true,
        require:true
      },
      email: {
        type: 'string',
        require:true
      },
      name: {
        type: 'string',
        require:true
      },
      password: {
        type: 'string',
        require:true
      }
});

export const UserModel=mongoose.model("users",UserSchema)
=======
import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
      email: {
        type: String,
        require:true,
        unique:true
      },
      name: {
        type:String,
        require:true
      },
      password: {
        type: String,
        require:true
      }
});

export const UserModel = mongoose.model("users",UserSchema)
>>>>>>> origin/back
