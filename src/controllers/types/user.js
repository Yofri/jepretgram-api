import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
    token: {type: GraphQLString},
    follower: {type: new GraphQLList(new GraphQLNonNull(GraphQLID))},
    following: {type: new GraphQLList(new GraphQLNonNull(GraphQLID))},
    /* total: {
      type: GraphQLInt,
      resolve: async root => {
        const totalPosts = await Post.find({uid: root._id})
        return totalPosts.length
      }
    },
    posts: {
      type: new GraphQLList(new GraphQLNonNull(PostType)),
      resolve: async root => await Post.find({uid: root._id})
    } */
  })
})