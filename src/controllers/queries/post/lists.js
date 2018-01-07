import {GraphQLNonNull, GraphQLList} from 'graphql'
import {Post} from '../../../models'
import {PostType} from '../../types'

export default {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(PostType))),
  resolve: () => Post.find()
}