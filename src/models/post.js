import mongoose from 'mongoose'

export default mongoose.model('posts', {
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  photo: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comments'
  }]
})