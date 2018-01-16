import {GraphQLNonNull, GraphQLID} from 'graphql'
import {Post} from '../../../models'
import {PostType} from '../../types'

export default {
  type: new GraphQLNonNull(PostType),
  args: {
    pid: {type: new GraphQLNonNull(GraphQLID)},
    uid: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {pid, uid}) => {
    const postTarget = await Post.findOne({_id: pid})
    const isLiked = postTarget.likes.filter(likers => {
      return String(likers) === uid
    })

    if (isLiked.length) {
      return Post.findByIdAndUpdate(pid, {
        $pull: {likes: uid}
      }, {new: true})
    } else {
      return Post.findByIdAndUpdate(pid, {
        $push: {likes: uid}
      }, {new: true})
    }
  }
}