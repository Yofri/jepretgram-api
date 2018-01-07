import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql'
import {Post} from '../../models'
import {PostType} from './'

export default new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
    token: {type: GraphQLString},
    total_post: {
      type: GraphQLInt,
      resolve: async root => {
        const totalPosts = await Post.find({uid: root._id})
        return totalPosts.length
      }
    },
    posts: {
      type: new GraphQLList(new GraphQLNonNull(PostType)),
      resolve: root => Post.find({uid: root._id})
    }
    /* follower: {type: new GraphQLList(new GraphQLNonNull(GraphQLID))},
    following: {type: new GraphQLList(new GraphQLNonNull(GraphQLID))}, */
  })
})