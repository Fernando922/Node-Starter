const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

//schemas quais campos e quais valores o model pode ter
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

ProductSchema.plugin(mongoosePaginate)

mongoose.model('Product', ProductSchema)  //registra o model