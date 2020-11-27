import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import author from './types/author'
import post from './types/post'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    author,
    post
  ])
})
