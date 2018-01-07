import {GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql'
import {Post} from '../../../models'
import {PostType} from '../../types'

export default {
  type: new GraphQLNonNull(PostType),
  args: {
    pid: {type: new GraphQLNonNull(GraphQLID)},
    uid: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: (root, {pid, uid}) => {
    return Post.findByIdAndUpdate({_id: pid}, {
      $pull: {'likes': uid}
    }, {new: true})
  }
}