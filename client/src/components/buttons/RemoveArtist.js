import React from 'react'

import Button from '@material-ui/core/Button'

import { GET_ARTISTS, REMOVE_ARTIST} from '../../queries'

import { useMutation } from '@apollo/react-hooks'
import { filter } from 'lodash'

const RemoveArtist = ({ id, firstName, lastName }) => {
  const [removeArtist] = useMutation(REMOVE_ARTIST, {
    update(cache, { data: { removeArtist } }) {
      const { artists } = cache.readQuery({ query: GET_ARTISTS})
      cache.writeQuery({
        query: GET_ARTISTS,
        data: {
          artists: filter(artists, o => {
            return o.id !== removeArtist.id
          })
        }
      })
    }
  })
  return (
    <Button variant='contained' color='secondary' style={{ margin: '10px' }}
    onClick={e => {
      e.preventDefault()
      removeArtist({
        variables: {
          id
        },
        optimisticResponse: {
          __typename: 'Mutation',
          removeContact: {
            __typename: 'Artist',
            id,
            firstName,
            lastName
          }
        }
      })
    }}
    >
      Delete
    </Button>
  )
}

export default RemoveArtist
