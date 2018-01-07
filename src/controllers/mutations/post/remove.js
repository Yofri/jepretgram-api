import {GraphQLNonNull, GraphQLID} from 'graphql'
import {Post} from '../../../models'
import {PostType} from '../../types'

export default {
  type: new GraphQLNonNull(PostType),
  args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (root, {id}) => Post.findByIdAndRemove(id)
}