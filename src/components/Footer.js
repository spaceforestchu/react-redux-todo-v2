import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
  <div>
    <Link to='/'>All</Link>
    <Link to='/active'>active</Link>
    <Link to='/completed'>completed</Link>
  </div>
)
