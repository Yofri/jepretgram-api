import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql'
import {User, Post, Comment} from '../../models'
import {UserType, CommentType} from './'

export default new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    uid: {type: new GraphQLNonNull(GraphQLID)},
    photo: {type: new GraphQLNonNull(GraphQLString)},
    caption: {type: new GraphQLNonNull(GraphQLString)},
    posted_by: {
      type: new GraphQLNonNull(UserType),
      resolve: root => User.findOne({_id: root.uid})
    },
    likes: {
      type: new GraphQLList(new GraphQLNonNull(UserType)),
      resolve: async root => {
        const post = await Post.findOne({_id: root.id}).populate('likes')
        return post.likes
      }
    },
    comments: {
      type: new GraphQLList(new GraphQLNonNull(CommentType)),
      resolve: root => Comment.find({pid: root._id})
    }
  })
})