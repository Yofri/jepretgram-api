import {GraphQLNonNull, GraphQLID} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'

export default {
  type: new GraphQLNonNull(UserType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    tid: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id, tid}) => {
    const targetUser = await User.findOne({_id: tid})
    const isFollowing = targetUser.followers.filter(follower => {
      return String(follower) === id
    })

    if (isFollowing.length) {
      await User.findByIdAndUpdate(tid, {
        $pull: {followers: id}
      })
      return await User.findByIdAndUpdate(id, {
        $pull: {following: tid}
      }, {new: true})
    } else {
      await User.findByIdAndUpdate(tid, {
        $push: {followers: id}
      })
      return await User.findByIdAndUpdate(id, {
        $push: {following: tid}
      }, {new: true})
    }
  }
}