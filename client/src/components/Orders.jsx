import React from 'react';
import './Orders.css';

export default function Orders() {
  return (
    <div className="orders-container">
        <h1 className='orders-title'>Orders</h1>
      <div className="orders-header">
        <div className="orders-header-item">
          <h1>Orders</h1>
          <h1>69</h1>
        </div>
        <div className="orders-header-item">
          <h1>Net Sales</h1> 
          <h1>$30,305</h1>
        </div>
      </div>
      <div className="orders-search">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search By Status" aria-label="Search"/>
          <input className="form-control me-2" type="date" placeholder="Transaction Date" aria-label="Transaction Date"/>
        </form>
      </div>
      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order</th>
              <th>Status</th>
              <th>Net Sales</th>
              <th>Items Sold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22/4/2023</td>
              <td>5</td>
              <td>Successful</td>
              <td>$54</td>
              <td>3</td>
            </tr>
            <tr>
              <td>2/4/2023</td>
              <td>6</td>
              <td>Pending</td>
              <td>$34</td>
              <td>4</td> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
