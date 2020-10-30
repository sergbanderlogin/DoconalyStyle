import dotenv from 'dotenv';

dotenv.config();

export default {
	MONGODB_URL: process.env.MONGODB_URL,
	IWT_SECRET: process.env.JWT_SECRET,
};
