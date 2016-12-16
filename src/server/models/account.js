// model here
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;
const saltRounds = 10;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// TODO convert this code to ES6, currently it does not work as this is undefined in arrow functions

userSchema.pre('save', function (next) {
  const user = this;

    // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

    // generate a salt
  return bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return next(err);

        // hash the password using our new salt
    return bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

            // override the cleartext password with the hashed one
      user.password = hash;
      return next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

export default mongoose.model('account', userSchema, 'accounts');
