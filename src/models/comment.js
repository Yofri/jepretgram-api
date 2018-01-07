import mongoose from 'mongoose'

export default mongoose.model('comments', {
  pid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'posts'
  },
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  comment: {
    type: String,
    required: true,
    trim: true
  }
})