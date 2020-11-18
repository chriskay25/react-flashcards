import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [deck, setDeck] = useState('');

  const handleChange = (event) => {
    setDeck(event.target.value);
    console.log("deck is equal to: ", event.target.value)
  };

  const menuItems = () => {
    return props.decks.map(deck => {
      return <MenuItem key={deck.id} value={deck.id}>{deck.attributes.name}</MenuItem>
    })
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="deck-selection">Deck</InputLabel>
        <Select
          labelId="deck-selection"
          id="deck-select"
          value={deck}
          onChange={handleChange}
        >
          {menuItems()}
        </Select>
        <Button>View Deck</Button>
      </FormControl>
    </div>
  )
  
}