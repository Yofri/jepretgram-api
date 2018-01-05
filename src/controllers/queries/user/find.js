import {GraphQLNonNull, GraphQLID} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'
import {getProjection} from '../../../utils'

export default {
  type: new GraphQLNonNull(UserType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}, _, fieldASTs) => {
    const projection = getProjection(fieldASTs)
    return User.findById(id).select(projection)
  }
}