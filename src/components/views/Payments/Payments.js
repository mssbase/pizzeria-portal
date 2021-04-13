import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({

  depositContext: {
    flex: 1,
  },

});

const Payments = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Recent Payments</h1>
      <Typography component="p" variant="h4">
        $32.44
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 13 April, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </div>
  );
};

export default Payments;
