import {GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql'
import {Comment, Post} from '../../../models'
import {CommentType} from '../../types'

export default {
  type: new GraphQLNonNull(CommentType),
  args: {
    pid: {type: new GraphQLNonNull(GraphQLID)},
    uid: {type: new GraphQLNonNull(GraphQLID)},
    comment: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: async (root, args) => {
    const comment = await Comment.create(args)
    await Post.findByIdAndUpdate({_id: comment.pid}, {
      $push: {'comments': comment._id}
    })
    return comment
  }
}