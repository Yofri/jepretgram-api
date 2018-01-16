import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} from 'graphql'
import {User, Post} from '../../models'
import {UserType, PostType} from './'

export default new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    pid: {type: new GraphQLNonNull(GraphQLID)},
    uid: {type: new GraphQLNonNull(GraphQLID)},
    comment: {type: new GraphQLNonNull(GraphQLString)},
    user: {
      type: new GraphQLNonNull(UserType),
      resolve: root => User.findOne({_id: root.uid})
    },
    post: {
      type: new GraphQLNonNull(PostType),
      resolve: root => Post.findOne({_id: root.pid})
    }
  })
})