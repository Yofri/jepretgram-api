import {GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql'
import {Post, User} from '../../../models'
import {PostType} from '../../types'
import {gcs} from '../../../utils'

export default {
  type: new GraphQLNonNull(PostType),
  args: {
    uid: {type: new GraphQLNonNull(GraphQLID)},
    photo: {type: new GraphQLNonNull(GraphQLString)},
    caption: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: async (root, args) => {
    args.photo = await gcs(args.photo)
    const post = await Post.create(args)
    await User.findByIdAndUpdate(args.uid, {
      $push: {'posts': post._id}
    })
    return post
  }
}