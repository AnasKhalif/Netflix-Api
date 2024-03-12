const User = require("../models/UserModel");

module.exports.addToLikedMovies = async(req, res) => { 
    try {
         const {email, data} = req.body;
         const user = await User.findOne({email});
         if(user) {
            const {likedMovies} = user;
            const movieAlredyLiked = likedMovies.find(({ id }) => id === data.id);
            if(!movieAlredyLiked) {
                await User.findByIdAndUpdate(
                    user._id, 
                    {
                        likedMovies:[...user.likedMovies, data], 
                    },
                    {new : true}
                );
            }else return res.json({msg : "Movie alredy added to the liked list"});
         }else await User.create({email, likedMovies:[data]});
         return res.json({msg:"Movie added successfully"});
    }catch(errror) {
        return res.json({msg:"Error adding movie"});
    }
 };