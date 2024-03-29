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
    position: "relative",
    top: -15,
    left: -5,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  icon: {
    fill: "rgba(0,0,0,0.85)",
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
        <InputLabel
          style={{ fontWeight: "bold", color: "rgba(0,0,0,0.85)" }}
          id="activity"
        >
          Aktivitet
        </InputLabel>
        <Select
          labelId="activity"
          id="selectactivity"
          value={selectedActivity}
          onChange={(e) => {
            const newlySelectedActivity = e.target.value;
            onFilterStateChanged(newlySelectedActivity, selectedInstructor);
          }}
          autoWidth
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          <MenuItem value="">
            <em>Alla</em>
          </MenuItem>
          {activities.map((activity) => (
            <MenuItem key={activity.id} value={activity.id}>
              {activity.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText style={{ fontWeight: "bold" }}>
          Välj Aktivitet
        </FormHelperText>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel
          style={{ fontWeight: "bold", color: "rgba(0,0,0,0.85)" }}
          id="instructor"
        >
          Inspiratör
        </InputLabel>
        <Select
          labelId="instructor"
          id="selectinstructor"
          value={selectedInstructor}
          onChange={(e) => {
            const newlySelectedInstructor = e.target.value;
            onFilterStateChanged(selectedActivity, newlySelectedInstructor);
          }}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
          autoWidth
        >
          <MenuItem value="">
            <em>Alla</em>
          </MenuItem>
          {instructors.map((instructor) => (
            <MenuItem key={instructor.id} value={instructor.id}>
              {instructor.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText style={{ fontWeight: "bold" }}>
          Välj inspiratör
        </FormHelperText>
      </FormControl>
    </div>
  );
}
