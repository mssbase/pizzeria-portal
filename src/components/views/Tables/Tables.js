import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {TableContainer} from '@material-ui/core';
import styles from './Tables.module.scss';


const demoContent = [
  {
    id: '1',
    hour: '13:00',
    tables: [
      { id: '1', status: 'null' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'null' },
    ],
  },
  {
    id: '2',
    hour: '13:30',
    tables: [
      { id: '1', status: 'null' },
      { id: '2', status: 'null' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'null' },
    ],
  },
  {
    id: '3',
    hour: '14:00',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
  {
    id: '4',
    hour: '14:30',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
  {
    id: '5',
    hour: '15:00',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
];

const renderActions = status => {
  switch (status) {
    case 'null':
      return (
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
          Book new
        </Button>
      );
    case 'booked':
      return (
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/1`}>
          Check Reservation
        </Button>
      );
    case 'event':
      return (
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/events/1`}>
          Check Event
        </Button>
      );
    default:
      return null;
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 3,
  },
}));

const Tables = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <CssBaseline/>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
              New Reservation
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} >
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={`${process.env.PUBLIC_URL}/tables/events/new`}>
              New event
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Table className={classes.paper}>
              <TableHead>
                <TableRow>
                  <TableCell>Hour</TableCell>
                  <TableCell>Table 1</TableCell>
                  <TableCell>Table 2</TableCell>
                  <TableCell>Table 3</TableCell>
                  <TableCell>Table 4</TableCell>
                  <TableCell>Table 5</TableCell>
                  <TableCell>Table 6</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {demoContent.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.hour}
                    </TableCell>
                    {row.tables.map(table => (
                      <TableCell key={table.id}>
                        {renderActions(table.status)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </TableContainer>
  );
};

export default Tables;
