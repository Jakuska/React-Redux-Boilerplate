import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


const Copyright = () => {
  return (
    <Grid>
      <Typography variant="body2" align="center">
        {'Copyright © '}
        <Link color="inherit" href="">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Grid>
  );
};

export default Copyright;
