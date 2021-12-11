import express from "express";
import expressAsynceHandler from 'express-async-handler';
import data from "../data.js";
import User from "../model/userModel.js";



const userRouter = express.Router();

userRouter.get('/seed', expressAsynceHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}));

export default userRouter;