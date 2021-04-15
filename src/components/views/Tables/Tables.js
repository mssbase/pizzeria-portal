import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import CloseIcon from '@material-ui/icons/Close';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const TableContent = [
  {
    hour: '10:00',
    tables: [
      {id: 1, status: 'booked'},
      {id: 2, status: 'booked'},
      {id: 3, status: 'booked'},
      {id: 4, status: 'free'},
      {id: 5, status: 'booked'},
    ],
  },
  {
    hour: '10:30',
    tables: [
      {id: 1, status: 'event'},
      {id: 2, status: 'free'},
      {id: 3, status: 'free'},
      {id: 4, status: 'free'},
      {id: 5, status: 'booked'},
    ],
  },
  {
    hour: '11:00',
    tables: [
      {id: 1, status: 'free'},
      {id: 2, status: 'event'},
      {id: 3, status: 'booked'},
      {id: 4, status: 'event'},
      {id: 5, status: 'booked'},
    ],
  },
  {
    hour: '11:30',
    tables: [
      {id: 1, status: 'free'},
      {id: 2, status: 'booked'},
      {id: 3, status: 'booked'},
      {id: 4, status: 'free'},
      {id: 5, status: 'booked'},
    ],
  },
  {
    hour: '12:00',
    tables: [
      {id: 1, status: 'free'},
      {id: 2, status: 'free'},
      {id: 3, status: 'booked'},
      {id: 4, status: 'free'},
      {id: 5, status: 'booked'},
    ],
  },
];

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
  positioning: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  links: {
    width: '100%',
    margin: '2px',
    textAlign: 'center',
  },
  center: {
    textAlign: 'center',
    fontSize: '1.3rem',
  },
  date: {
    padding: '0 20px',
    margin: 8,
  },
}));

const RenderActions = status => {
  const classes = useStyles();
  switch (status) {
    case 'free':
      return (
        <div className={classes.paper}>
          <div>
            <div>
              <OpenInNewIcon className={classes.links} fontSize="large"/>
            </div>
          </div>
          <div className={`${classes.positioning} + ${classes.links}`}>
            <Button
              component={Link}
              variant="contained"
              color="primary"
              to={`${process.env.PUBLIC_URL}/tables/booking/new`}
              style={{
                maxWidth: '140px',
                maxHeight: '30px',
                minWidth: '140px',
                minHeight: '30px',
              }}
            >
              New Booking
            </Button>
          </div>
          <div className={`${classes.positioning} + ${classes.links}`}>
            <Button
              component={Link}
              variant="contained"
              color="primary"
              to={`${process.env.PUBLIC_URL}/tables/events/new`}
              style={{
                maxWidth: '140px',
                maxHeight: '30px',
                minWidth: '140px',
                minHeight: '30px',
              }}
            >
              New Event
            </Button>
          </div>
        </div>
      );
    case 'booked':
      return (
        <div className={classes.positioning}>
          <div>
            <CloseIcon fontSize="large"/>
          </div>
          <div className={`${classes.positioning} + ${classes.links}`}>
            <Button
              component={Link}
              variant="contained"
              color="secondary"
              to={`${process.env.PUBLIC_URL}/tables/booking/idBooking`}
            >
              Booked
            </Button>
          </div>
        </div>
      );
    case 'event':

      return (
        <div className={classes.positioning}>
          <div>
            <EventIcon fontSize="large"/>
          </div>
          <div className={`${classes.positioning} + ${classes.links}`}>
            <Button
              component={Link}
              variant="contained"
              color="primary"
              to={`${process.env.PUBLIC_URL}/tables/events/idEvent`}>
              Event
            </Button>
          </div>
        </div>
      );
    default:
      return null;
  }
};


const Tables = () => {

  let day = new Date();
  let today = day.toISOString().substr(0, 10);
  const [date, setDate] = React.useState(today);

  const changeDate = date => {
    setDate(date);
    console.log(date);
  };
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <CssBaseline/>
      <Paper className={classes.content}>
        <div className={classes.content}>
          <form className={classes.content} noValidate>
            <React.Fragment>
              <Button
                component={Link}
                variant="contained"
                color="primary"
                to={`${process.env.PUBLIC_URL}/tables/booking/new`}
                style={{
                  maxWidth: '140px',
                  maxHeight: '30px',
                  minWidth: '140px',
                  minHeight: '30px',
                }}
                className={classes.date}
              >
                New Booking
              </Button>
              <Button
                component={Link}
                variant="contained"
                color="primary"
                to={`${process.env.PUBLIC_URL}/tables/events/idEvent`}
                style={{
                  maxWidth: '140px',
                  maxHeight: '30px',
                  minWidth: '140px',
                  minHeight: '30px',
                }}
                className={classes.date}
              >
                New Event
              </Button>
              <TextField
                id='date'
                label='Date'
                type='date'
                defaultValue={date}
                onChange={changeDate}
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.date}
              />
            </React.Fragment>
          </form>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell className={classes.center}>Table 1</TableCell>
              <TableCell className={classes.center}>Table 2</TableCell>
              <TableCell className={classes.center}>Table 3</TableCell>
              <TableCell className={classes.center}>Table 4</TableCell>
              <TableCell className={classes.center}>Table 5</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TableContent.map(table => (
              <TableRow key={table.hour}>
                <TableCell component="th" scope="row">
                  {table.hour}
                </TableCell>
                {table.tables.map(singleTable => (
                  <TableCell key={singleTable.id}>{RenderActions(singleTable.status)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Tables;
