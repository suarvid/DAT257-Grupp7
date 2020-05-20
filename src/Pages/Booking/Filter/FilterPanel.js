import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Select from "./FilterSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

class FilterPanel extends Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      instructors: [],
    };
  }

  render() {
    const {
      activities,
      instructors,
      classes,
      onFilterStateChanged,
      selectedActivity,
      selectedInstructor,
    } = this.props;

    return (
      <div className={classes.root}>
        <ExpansionPanel style={{ backgroundImage: 'url("https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=")' }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Filtrering</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Select
                selectedActivity={selectedActivity}
                selectedInstructor={selectedInstructor}
                activities={activities}
                instructors={instructors}
                onFilterStateChanged={onFilterStateChanged}
              />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(useStyles)(FilterPanel);
