const mongoose = require("../connection");

const orderSchema = new mongoose.Schema({
  location: { lat: { type: Number }, lang: { type: Number } },
  products: [
    {
      item: { type: String },
      quantity: { type: Number },
    },
  ],
  email: { type: String },
  phone: { type: String },
  emergency_level : { type: Number },  // an order can take high/medium/low emergacy_level (3,2,1)

  //these data will get populated by store-keeper
  volume: { type: Number }, 
  load: { type: Number }
});

module.exports = mongoose.model("orders", orderSchema);
