import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import {
  allUsers, findUser,
  allPosts, findPost,
  allComments, findComment
} from './queries'
import {
  createUser, updateUser, removeUser, login,
  createPost, updatePost, removePost
} from './mutations'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      allUsers, findUser,
      allPosts, findPost,
      allComments, findComment
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser, updateUser, removeUser, login,
      createPost, updatePost, removePost
    }
  })
})