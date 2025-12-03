const mongoose = require('mongoose');
const pino = require('pino');
const logger = pino();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        logger.info('MongoDB connected ✔');
    } catch (err) {
        logger.error(`Database connection error : ${err}`);
        process.exit(1);
    }
}

module.exports = connectDB;