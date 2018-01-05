import {GraphQLNonNull, GraphQLList} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'

export default {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
  resolve: () => User.find()
}