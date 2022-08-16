import mongoose from "mongoose"
import config from "config"

async function connect(){
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/movies");
        console.log("Connected to database successfully");
    } catch (error) {
        console.log("Error on connect to database" + error);
    }
}

export default connect;
