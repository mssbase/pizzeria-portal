import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(id, date, order, status, paymentMethod, amount) {
  return { id, date, order, status, paymentMethod, amount };
}

const rows = [
  createData(0, '13 Apr, 2021', '345', 'paid', 'VISA ⠀•••• 3719', 32.44),
  createData(1, '13 Apr, 2021', '343', 'prepared', 'VISA ⠀•••• 2574', 86.99),
  createData(2, '13 Apr, 2021', '341', 'delivered', 'MASTER ⠀•••• 1253', 100.81),
  createData(3, '13 Apr, 2021', '333', 'delivered', 'CASH', 64.50),
  createData(4, '13 Apr, 2021', '344', 'prepared', 'VISA ⠀•••• 5919', 22.55),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <div>
      <h1>Recent Orders</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.order}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount + '$'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </div>
  );
}
