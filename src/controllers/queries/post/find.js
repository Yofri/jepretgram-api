import {GraphQLNonNull, GraphQLID} from 'graphql'
import {Post} from '../../../models'
import {PostType} from '../../types'
import {getProjection} from '../../../utils'

export default {
  type: new GraphQLNonNull(PostType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}, _, fieldASTs) => {
    const projection = getProjection(fieldASTs)
    return Post.findById(id).select(projection)
  }
}