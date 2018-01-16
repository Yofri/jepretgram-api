import mongoose from 'mongoose'
import {isEmail} from 'validator'

export default mongoose.model('users', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
    validate: [isEmail, 'Email is not a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'posts'
  }]
})