import {GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql'
import {Post} from '../../../models'
import {PostType} from '../../types'

export default {
  type: new GraphQLNonNull(PostType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    caption: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: (root, args) => Post.findByIdAndUpdate(args.id, args, {new: true})
}