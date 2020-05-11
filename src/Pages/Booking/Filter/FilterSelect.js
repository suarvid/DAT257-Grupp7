import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [activity, setActivity] = React.useState('');
  const [instructor, setInstructor] = React.useState('');

  const handleChangeActivity = (event) => {
    setActivity(event.target.value);
    console.log(activity);

  };

  const handleChangeInstrucor = (event) => {
    setInstructor(event.target.value);
    console.log(instructor);
  };

  return (
    <div>
     
     <FormControl className={classes.formControl}>
        <InputLabel id="activity">Aktivitet</InputLabel>
        <Select
          labelId="activity"
          id="selectactivity"
          value={activity}
          onChange={handleChangeActivity}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Dans</MenuItem>
          <MenuItem value={2}>Löpning</MenuItem>
          <MenuItem value={3}>Pingis</MenuItem>
          <MenuItem value={4}>Taekwondo</MenuItem>
          <MenuItem value={5}>Yoga</MenuItem>
        </Select>
        <FormHelperText>Välj Aktivitet</FormHelperText>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="instructor">Inspiratör</InputLabel>
        <Select
          labelId="instructor"
          id="selectinstructor"
          value={instructor}
          onChange={handleChangeInstrucor}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Anna Nyström</MenuItem>
          <MenuItem value={11}>Lotten Jersby</MenuItem>
        </Select>
        <FormHelperText>Välj inspiratör</FormHelperText>
      </FormControl>

    </div>
  );
}