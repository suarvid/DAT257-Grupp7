import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Select from "./FilterSelect";

export default function FilterPanel(props) {
  const {
    activities,
    instructors,
    onFilterStateChanged,
    selectedActivity,
    selectedInstructor,
  } = props;

  return (
    <div>
      <ExpansionPanel
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=")',
          backgroundSize: "cover",
        }}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontWeight: "bold" }}>Filtrering</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontWeight: "bold" }}>
            <Select
              selectedActivity={selectedActivity}
              selectedInstructor={selectedInstructor}
              activities={activities}
              instructors={instructors}
              onFilterStateChanged={onFilterStateChanged}
              style={{ fontWeight: "bold" }}
            />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
