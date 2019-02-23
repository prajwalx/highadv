'use strict';

import mongoose from 'mongoose';

var CitylistSchema = new mongoose.Schema({
  State: String,
  City: String
});

export default mongoose.model('Citylist', CitylistSchema);
