import React from 'react';
import clsx from 'clsx';
import { makeStyles, Grid, Toolbar, AppBar, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.background.default}`,
    boxShadow: `0 0 35px 0  ${theme.palette.background.default}`,
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    zIndex: theme.appBar,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'auto',
    width: '100%',
    paddingLeft: 0,
  },
  logo: {
    color: 'black',
    textAlign: 'center',
  },
}));


function TopBar(props) {
  const { className } = props;
  const classes = useStyles(props);

  const Logo = () => {
    return (
      <Typography variant="h1" className={classes.logo}>
        Checkout
      </Typography>
    );
  };


  return (
    <AppBar position="static" className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={5}>
            <Logo />
          </Grid>
          <Grid item xs={7}>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
