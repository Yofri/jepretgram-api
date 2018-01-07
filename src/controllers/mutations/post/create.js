import {GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql'
import {Post} from '../../../models'
import {PostType} from '../../types'

export default {
  type: new GraphQLNonNull(PostType),
  args: {
    uid: {type: new GraphQLNonNull(GraphQLID)},
    photo: {type: new GraphQLNonNull(GraphQLString)},
    caption: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: (root, args) => Post.create(args)
}