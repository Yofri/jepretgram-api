import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    pid: {type: new GraphQLNonNull(GraphQLID)},
    uid: {type: new GraphQLNonNull(GraphQLID)},
    comment: {type: new GraphQLNonNull(GraphQLString)}
  })
})