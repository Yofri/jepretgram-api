import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql'
import {User, Post} from '../../models'
import {UserType, PostType} from './'

export default new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
    token: {type: GraphQLString},
    posts: {
      type: new GraphQLList(new GraphQLNonNull(PostType)),
      resolve: root => Post.find({uid: root._id})
    },
    followers: {
      type: new GraphQLList(new GraphQLNonNull(UserType)),
      resolve: async root => {
        const user = await User.findOne({_id: root.id}).populate('followers')
        return user.followers
      }
    },
    following: {
      type: new GraphQLList(new GraphQLNonNull(UserType)),
      resolve: async root => {
        const user = await User.findOne({_id: root.id}).populate('following')
        return user.following
      }
    }
  })
})