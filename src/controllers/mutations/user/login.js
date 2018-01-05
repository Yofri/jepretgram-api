import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import {GraphQLNonNull, GraphQLString} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'

export default {
  type: new GraphQLNonNull(UserType),
  args: {
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: async (root, {email, password}) => {
    const user = await User.find({email})
    if (!user.length) return {msg: 'Email not found.'}

    const valid = await bcrypt.compare(password, user[0].password)
    if (!valid) return {msg: 'Wrong password.'}

    const payload = {
      id: user[0]._id,
      email: user[0].email
    }

    const token = jwt.sign(payload, process.env.JWT_KEY)
    return Object.assign(user[0], {token})
  }
}