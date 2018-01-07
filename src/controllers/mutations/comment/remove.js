import {GraphQLNonNull, GraphQLID} from 'graphql'
import {Comment} from '../../../models'
import {CommentType} from '../../types'

export default {
  type: new GraphQLNonNull(CommentType),
  args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: async (root, {id}) => {
    const comment = Comment.findByIdAndRemove(id)
    await Post.findByIdAndUpdate({_id: comment.pid}, {
      $pull: {'comments': comment._id}
    })
    return comment
  }
}