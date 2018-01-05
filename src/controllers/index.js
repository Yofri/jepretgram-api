import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import {
  allUsers, findUser
} from './queries'
import {
  createUser, updateUser, removeUser, login
} from './mutations'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      allUsers, findUser
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser, updateUser, removeUser, login
    }
  })
})