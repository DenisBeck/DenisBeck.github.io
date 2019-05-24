import React from 'react';
import classes from './Price.css';

const Price = (props) => (
    <div className={classes.PriceContainer}>
        <p>${props.value}</p>
    </div>
);

export default Price;