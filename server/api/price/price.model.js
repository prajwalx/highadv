'use strict';

import mongoose from 'mongoose';

var PriceSchema = new mongoose.Schema({
  UserEmail:String,
  HotelId:String,
  RoomId:String,
  Price:Object,
  // PulishedPrice:Number,
  // BasePriceSingle:Number,
  // BasePriceDouble:Number,
  // ExtraAdultCost:Number,
  // ExtraChildCost:Number,
  // AdultBreakfastRate:Number,
  // AdultLunchRate:Number,
  // AdultDinnerRate:Number,
  // ChildBreakfastRate:Number,
  // ChildLunchRate:Number,
  // ChildDinnerRate:Number,
  // StartDate:Date,
  // EndDate:Date,
});

export default mongoose.model('Price', PriceSchema);
