import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql'
import {User} from '../../models'
import {UserType} from './'

export default new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    uid: {type: new GraphQLNonNull(GraphQLID)},
    photo: {type: new GraphQLNonNull(GraphQLString)},
    caption: {type: new GraphQLNonNull(GraphQLString)},
    user: {
      type: new GraphQLNonNull(UserType),
      resolve: root => User.findOne({_id: root.uid})
    }
    /* likes: {
      type: new GraphQLList(new GraphQLNonNull(UserType)),
      resolve: root => User.find({_id: root._uid})
    }, */
    /* comments: {
      type: new GraphQLList(new GraphQLNonNull(CommentType)),
      resolve: root => Comment.find({pid: root._id})
    } */
  })
})