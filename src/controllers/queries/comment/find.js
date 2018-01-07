import {GraphQLNonNull, GraphQLID} from 'graphql'
import {Comment} from '../../../models'
import {CommentType} from '../../types'
import {getProjection} from '../../../utils'

export default {
  type: new GraphQLNonNull(CommentType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}, _, fieldASTs) => {
    const projection = getProjection(fieldASTs)
    return Comment.findById(id).select(projection)
  }
}