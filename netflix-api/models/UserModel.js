const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        max : 50,
    },
    likedMovies : Array,
});

module.exports = mongoose.model("users", UserSchema);