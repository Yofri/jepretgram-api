import {GraphQLNonNull, GraphQLList} from 'graphql'
import {Comment} from '../../../models'
import {CommentType} from '../../types'

export default {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CommentType))),
  resolve: () => Comment.find()
}