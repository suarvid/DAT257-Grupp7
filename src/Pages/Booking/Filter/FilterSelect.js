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

  const {
    onFilterStateChanged,
    activities,
    instructors,
    selectedActivity,
    selectedInstructor,
  } = props;

  if (!activities || !instructors) return null;

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="activity">Aktivitet</InputLabel>
        <Select
          labelId="activity"
          id="selectactivity"
          value={selectedActivity}
          onChange={(e) => {
            const newlySelectedActivity = e.target.value
            onFilterStateChanged(newlySelectedActivity, selectedInstructor)
          }}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {activities.map((activity) => (
            <MenuItem key={activity.id} value={activity.id}>{activity.name}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Välj Aktivitet</FormHelperText>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="instructor">Inspiratör</InputLabel>
        <Select
          labelId="instructor"
          id="selectinstructor"
          value={selectedInstructor}
          onChange={(e) => {
            const newlySelectedInstructor = e.target.value
            onFilterStateChanged(selectedActivity, newlySelectedInstructor)
          }}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {instructors.map((instructor) => (
            <MenuItem key={instructor.id} value={instructor.id}>
              {instructor.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Välj inspiratör</FormHelperText>
      </FormControl>
    </div>
  );
}
