import React, { Fragment, useState } from 'react'

import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom";



import RemoveArtist from '../buttons/RemoveArtist'
import DisplayCard from '../cards/DisplayCard'
import UpdateArtist from '../forms/UpdateArtist'

import { GET_INSTRUMENTS } from "../../queries";

const useStyles = makeStyles({
  label: {
    textDecoration: 'none'
  }
})

const Artist = props => {
  const classes = useStyles()
  const [id] = useState(props.id)
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [editMode, setEditMode] = useState(false)

  const handleButtonClick = () => {
    setEditMode(!editMode)
  }

  const fullName = () => {
    return `${firstName} ${lastName}`
  }

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      default:
        break
    }
  }
  
  return (
    <DisplayCard>
      {editMode ? (
        <UpdateArtist
          id={props.id}
          firstName={props.firstName}
          lastName={props.lastName}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
        <Fragment>
        <ListItem>
          <ListItemText primary={fullName()} />
          <Button variant='contained' style={{ margin: '5px' }}
          onClick={() => setEditMode(true)}
          >
            Edit
          </Button>
          <RemoveArtist 
          id={props.id}
          firstName={props.firstName}
          lastName={props.lastName}
          />
        </ListItem>
        <CardActions>
          <Button color='primary' size='small' variant='outlined'>
            <Link
            to={{
              pathname:`/${id}`,
              state:{id, firstName, lastName}
            }}
            >
            Learn More
            </Link>
          </Button>
        </CardActions>
      </Fragment>
      )}
      
    </DisplayCard>
  )
}

export default Artist
