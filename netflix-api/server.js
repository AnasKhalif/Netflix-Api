const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const url = 'mongodb://localhost:27017/netflix'

mongoose.connect(url, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(() => (
    console.log("DB Connected")
));

// module.exports = async () => {
//     try {
//         await mongoose.connect(url, {});
//         console.log("CONNECTED TO DATABASE SUCCESSFULLY");
//     } catch (error) {
//         console.error('COULD NOT CONNECT TO DATABASE:', error.message);
//     }
// };


app.use("/api/user", userRoutes);

app.listen(5000, console.log("server started"));

// app.set('port', (5000), console.log("server started"));
