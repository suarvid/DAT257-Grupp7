import React from 'react';
import { Paper, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { AccountCircle,  VpnKey } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      zIndex:100,
      width: "50%",
      backgroundColor: theme.palette.background.paper,
      padding: "20px",
      margin:"10px",
    },
  }));

function Login() {
        const classes = useStyles();
        return (
            <div>
            <Paper className={classes.root}>
                    <Grid container spacing={8} alignItems="flex-end" >
                        <Grid item>
                            <AccountCircle className={classes.color}/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true} >
                            <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <VpnKey className={classes.color}/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between" style={{ marginTop: '15px' }}>
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{textTransform: "none", color:"#4d8948" }} variant="text">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
            </Paper>
            </div>
        );
    
}

export default Login;