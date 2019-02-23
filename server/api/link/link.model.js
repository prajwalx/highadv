'use strict';

import mongoose from 'mongoose';

var LinkSchema = new mongoose.Schema({
  email: String,
//  hotelid: Object,
  //roomid: Object
});

export default mongoose.model('Link', LinkSchema);
