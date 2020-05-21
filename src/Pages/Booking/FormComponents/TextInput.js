import React from "react"
import "./TextInput.css"
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));



export default function TextInput() {
    const classes = useStyles();
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField className = ""
            error = {this.state.error}
            id="outlined-basic"
            variant="outlined"
            fullWidth="true"
            type={this.state.type}
            name={this.state.name}
            value={this.state.getParentText}
            label={this.state.placeholder}
            onChange={this.state.handleChange}>
            </TextField>
      </div>
      </form>
    )

}


/*
  this.state = {
      name: props.name,
      type: props.type,
      value: props.value,
      label: props.label,
      placeholder: props.placeholder,
      handleChange: props.handleChange,
      getParentText : props.ParentText,
    }

  }
  render() {
    return (
      <div>
          <TextField
            error = {this.state.error}
            id="outlined-basic"
            variant="outlined"
            fullWidth="true"
            type={this.state.type}
            name={this.state.name}
            value={this.state.getParentText}
            label={this.state.placeholder}
            onChange={this.state.handleChange}>
            </TextField>
      </div>
    )
  }*/