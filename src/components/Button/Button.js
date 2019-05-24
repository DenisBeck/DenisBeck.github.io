import React from 'react';

import classes from './Button.css';

const Button = (props) => (
    <button onClick={props.onButtonClick} className={classes.Button}><span className={classes.Text}>{props.title}</span></button>
);

export default Button;