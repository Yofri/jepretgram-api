import {GraphQLNonNull, GraphQLID} from 'graphql'
import {Comment, Post} from '../../../models'
import {CommentType} from '../../types'

export default {
  type: new GraphQLNonNull(CommentType),
  args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: async (root, {id}) => {
    const comment = await Comment.findByIdAndRemove(id)
    const post = await Post.findByIdAndUpdate(comment.pid, {
      $pull: {comments: comment._id}
    })
    return comment
  }
}