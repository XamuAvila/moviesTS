import mongoose from "mongoose"
import config from "config"
import Logger from "./logger";

async function connect(){
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/movies");
        Logger.info("Connected to database successfully");
    } catch (error) {
        Logger.error("Error on connect to database" + error);
        process.exit(1);
    }
}

export default connect;
