import express from 'express';
import User from "../models/userModel";

const userRouter = express.Router();

userRouter.get("/createadmin", async (req, res) => {
	try {
		const user = new User({
			name: 'admin',
			email: 'admin@example.com',
			password: 'doconalystyle',
			isAdmin: true,
		});
		const createUser = await user.save();
		res.send(createUser);
	} catch(err){
		res.status(5000).send({message: err.message});
	}
});

export default userRouter;