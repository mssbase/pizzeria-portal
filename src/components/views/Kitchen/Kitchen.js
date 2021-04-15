import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';

const demoContent = [
  {order: 123, tableNumber: '1', onlineOrderNumber: '', dishes: 'Breakfast', amount: 3, options: 'spicy'},
  {order: 234, tableNumber: '2', onlineOrderNumber: '', dishes: 'Salad', amount: 2, options: 'no salt'},
  {order: 345, tableNumber: '', onlineOrderNumber: 'Delivery 1', dishes: 'Pizza', amount: 4, options: 'extra ketchup'},
];

const renderActions = () => {
  return (
    <Button
      variant="contained"
      color="primary"
    >
      PREPARED
    </Button>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },

}));

const Kitchen = () => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>

      <CssBaseline/>
      <Paper className={classes.content}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell>Table Number <br></br>/ Delivery Order Number</TableCell>
              <TableCell>Ordered Dishes</TableCell>
              <TableCell>Dishes Amount</TableCell>
              <TableCell>Dishes Options</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.order}>
                <TableCell component="th" scope="row">
                  {row.order}
                </TableCell>
                <TableCell>
                  {row.tableNumber}{row.onlineOrderNumber}
                </TableCell>
                <TableCell>
                  {row.dishes}
                </TableCell>
                <TableCell>
                  {row.amount}
                </TableCell>
                <TableCell>
                  {row.options}
                </TableCell>
                <TableCell>
                  {renderActions(row.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Kitchen;
