import app from "./app.js";
import { connectDB } from "./config/database.js";
import { PORT } from "./config/constants.js";

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed: ", err);
    });
