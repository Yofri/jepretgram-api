import bcrypt from 'bcryptjs'
import {GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'
import {getProjection} from '../../../utils'

export default {
  type: new GraphQLNonNull(UserType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  },
  resolve: async (root, args, _, fieldASTs) => {
    if (args.password) args.password = await bcrypt.hash(args.password, 8)
    await User.findByIdAndUpdate(args.id, args)

    const projection = getProjection(fieldASTs)
    return User.findById(args.id).select(projection)
  }
}