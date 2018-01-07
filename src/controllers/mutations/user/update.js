import bcrypt from 'bcryptjs'
import {GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'

export default {
  type: new GraphQLNonNull(UserType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  },
  resolve: async (root, args) => {
    if (args.password) args.password = await bcrypt.hash(args.password, 8)
    return User.findByIdAndUpdate(args.id, args, {new: true})
  }
}