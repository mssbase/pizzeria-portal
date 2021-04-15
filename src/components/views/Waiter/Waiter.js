import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link, NavLink} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import {withStyles} from '@material-ui/styles';

const styles = theme => ({
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
  button: {
    margin: 8,
    padding: '0 10px',
    maxWidth: '120px',
    maxHeight: '30px',
    minWidth: '120px',
    minHeight: '30px',
  },
});

class Waiter extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.any,
    }),
    updateTables: PropTypes.func,
    tables: PropTypes.any,
    update: PropTypes.any,
  }


  componentDidMount() {
    const {fetchTables} = this.props;
    fetchTables();
  }

  handleClick(status, rowId, event) {
    console.log('event onClick', event);
    console.log('status onClick', status);
    console.log('rowId onClick', rowId);

    const {updateTables} = this.props;
    updateTables(rowId, status);
  }

  renderActions(status, rowId) {
    switch (status) {
      case 'free':
        return (
          <>
            <Button
              onClick={(e) => this.handleClick('thinking', rowId, e)}
              variant="contained"
              color="primary"
              style={{
                maxWidth: '120px',
                maxHeight: '30px',
                minWidth: '120px',
                minHeight: '30px',
              }}
            >
              thinking
            </Button>
            <Box p={1} bgcolor="background.paper">
            </Box>
            <Button
              variant="contained"
              color="primary"
              component={NavLink}
              to={`${process.env.PUBLIC_URL}/waiter/order/new`}
              style={{
                maxWidth: '120px',
                maxHeight: '30px',
                minWidth: '120px',
                minHeight: '30px',
              }}
            >
              new order
            </Button>
          </>
        );
      case 'thinking':
        return (
          <Button component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={(e) => this.handleClick('prepared', rowId, e)}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={(e) => this.handleClick('delivered', rowId, e)}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={(e) => this.handleClick('paid', rowId, e)}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={(e) => this.handleClick('free', rowId, e)}>free</Button>
        );
      default:
        return null;
    }
  }


  render() {
    const {loading: {active, error}, tables} = this.props;
    const {classes} = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={classes.content}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={classes.content}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <div className={classes.paper}>
          <Paper className={classes.content}>
            <CssBaseline/>
            <>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`${process.env.PUBLIC_URL}/waiter/order/new`}
                className={classes.button}
              >
                New Order
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`${process.env.PUBLIC_URL}/waiter/order/1`}
                className={classes.button}
              >
                Sample 1
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`${process.env.PUBLIC_URL}/waiter/order/2`}
                className={classes.button}
              >
                Sample 2
              </Button>
            </>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Order</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tables.map(row => (
                  <TableRow key={row.id}>
                    <TableCell
                      component="th"
                      scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>
                      {row.status}
                    </TableCell>
                    <TableCell>
                      {row.order && (
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                        >
                          <Link
                            to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}
                            style={{color: 'inherit', textDecoration: 'inherit'}}
                          >
                            {row.order}
                          </Link>
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {this.renderActions(row.status, row.id)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      );
    }
  }
}

Waiter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Waiter);
