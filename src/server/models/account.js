//model here
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;
const saltRounds = 10;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function(password){
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(passwords, salt, function(err, hash) {
            // Store hash in your password DB.
            this.hash = hash;
            this.salt = salt;
        });
    });
};

export default mongoose.model('account', userSchema, 'accounts');
