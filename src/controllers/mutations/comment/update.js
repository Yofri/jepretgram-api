import {GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql'
import {Comment} from '../../../models'
import {CommentType} from '../../types'
import {getProjection} from '../../../utils'

export default {
  type: new GraphQLNonNull(CommentType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    comment: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: async (root, args, _, fieldASTs) => {
    await Comment.findByIdAndUpdate(args.id, args)
    const projection = getProjection(fieldASTs)
    return Comment.findById(args.id).select(projection)
  }
}