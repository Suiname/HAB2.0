import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const leagueSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  users: {
    type: [String],
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('league', leagueSchema, 'leagues');
