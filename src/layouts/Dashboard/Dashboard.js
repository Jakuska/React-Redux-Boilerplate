import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import TopBar from './components/TopBar';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    background: theme.palette.background.default,
  },
  main: {
    height: 'auto',
    padding: theme.spacing(3),
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: 950,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(3, 3),
  },
}));


function Dashboard({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar  />
      <main className={classes.main}>
        <Paper className={classes.paper} >
          {children}
        </Paper>
      </main>
    </div>
  );
}

export default Dashboard;
