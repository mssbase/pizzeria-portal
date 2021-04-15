import React from 'react';
import styles from './WaiterOrder.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {tableNumber: '1', orderedProducts: 'tomato soup, fish and chips', orderedProductsOptions: 'sour, extra ketchup',
    price: '10 zl, 20 zł', totalPrice: '30 zl',
  },
];

const WaiterOrder = () => (
  <Paper className={styles.component}>
    <h2>Waiter Order view</h2>
    <h2>id: {window.location.pathname.replace('/panel/waiter/order/', '')}</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><b>Table Number</b></TableCell>
          <TableCell><b>Ordered products</b></TableCell>
          <TableCell><b>Ordered products options</b></TableCell>
          <TableCell><b>Price</b></TableCell>
          <TableCell><b>Total price</b></TableCell>
        </TableRow>

      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.tableNumber}>
            <TableCell component="th" scope="row">{row.tableNumber}</TableCell>
            <TableCell>{row.orderedProducts}</TableCell>
            <TableCell>{row.orderedProductsOptions}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.totalPrice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default WaiterOrder;
