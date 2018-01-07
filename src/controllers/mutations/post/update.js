import {GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql'
import {Post} from '../../../models'
import {PostType} from '../../types'
import {getProjection} from '../../../utils'

export default {
  type: new GraphQLNonNull(PostType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    caption: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: async (root, args, _, fieldASTs) => {
    await Post.findByIdAndUpdate(args.id, args)
    const projection = getProjection(fieldASTs)
    return Post.findById(args.id).select(projection)
  }
}