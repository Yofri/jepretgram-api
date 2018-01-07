import {GraphQLNonNull, GraphQLID} from 'graphql'
import {Post, User} from '../../../models'
import {PostType} from '../../types'

export default {
  type: new GraphQLNonNull(PostType),
  args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: async (root, {id}) => {
    const post = await Post.findByIdAndRemove(id)
    await User.findByIdAndUpdate({_id: post.uid}, {
      $pull: {'posts': post._id}
    })
    return post
  }
}