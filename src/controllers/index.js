import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import {
  allUsers, findUser,
  allPosts, findPost,
  allComments, findComment
} from './queries'
import {
  login, createUser, updateUser, removeUser, toggleFollow,
  createPost, updatePost, removePost, toggleLike,
  createComment, updateComment, removeComment
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
      login, createUser, updateUser, removeUser, toggleFollow,
      createPost, updatePost, removePost, toggleLike,
      createComment, updateComment, removeComment
    }
  })
})