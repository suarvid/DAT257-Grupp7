import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

  const [instructor, setInstructor] = React.useState('');
  const [activity, setActivity] = React.useState('');

  const instructors =[
    {
      value: 'Lotten',
      label: 'Lotten Jersby',
    },
    {
      value: 'Anna',
      label: 'Anna Nyström',
    },
  ];

  const handleChangeActivity = (event) => {
    const selectedActivity = event.target.value
    setActivity(selectedActivity);
    console.log(selectedActivity);
  };

  const handleChangeInstrucor = (event) => {
    //setInstructor(event.target.value);
    //console.log(instructor);
  };

  const { activities } = props

  if (!activities) return null

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
          {activities.map((activity) => (
            <MenuItem value={activity}>
              {activity}
            </MenuItem>
          ))}
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
          {instructors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Välj inspiratör</FormHelperText>
      </FormControl>
    </div>
  );
}
