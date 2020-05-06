import React, { useState } from 'react';
import { Paper, Grid, TextField, Button, FormControlLabel, FormControl, Checkbox } from '@material-ui/core';
import { AccountCircle,  VpnKey } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
      zIndex:100,
      width: "50%",
      backgroundColor: theme.palette.background.paper,
      padding: "20px",
      margin:"20px",
    },
  }));

    function Login(props) {
        const classes = useStyles();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        // getModalStyle is not a pure function, we roll the style only on the first render
        const [modalStyle] = React.useState(getModalStyle);
        const [open, setOpen] = React.useState(false);

        function getModalStyle() {
         
            return {
              backgroundColor:"white",
              width: "50%",
              marginTop:"30%",
              marginLeft:"10%",
              paddingBottom: "20px",
              alignItems: "center",
            };
          }

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        const body = (
            <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Har du glömt ditt lösenord?</h2>
            <p id="simple-modal-description">
                Kontakta oss så hjälper vi dig!
            </p>
            <Modal />
            </div>
        );
            
        //Might add checks for validity here
        function handleSubmit(event) {
          event.preventDefault();
        }

        return (
            <div>
            <Paper className={classes.root}>
                    <Grid container spacing={8} alignItems="flex-end" >
                        <Grid item>
                            <AccountCircle className={classes.color}/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true} >
                            <TextField id="email" label="E-mail" type="email" fullWidth autoFocus required />
                        </Grid>
                        <FormControl
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <VpnKey className={classes.color}/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="password" label="Password" type="password" fullWidth required />
                        </Grid>
                        <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    </Grid>
                    <Grid container alignItems="center" justify="space-between" style={{ marginTop: '15px' }}>
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{textTransform: "none", color:"#4d8948" }} variant="text" onClick={handleOpen}>
                                Forgot password ?
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                >
                                {body}
                            </Modal>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" style={{ textTransform: "none" }} onClick={handleSubmit}>Login</Button>
                    </Grid>
            </Paper>
            </div>
        );
    
}

export default Login;