import React from 'react';

import classes from './MainCategories.css';
import Card from '../../Card/Card';

const MainCategories = (props) => (
    <div className={classes.MainCategories}>
        {
            props.categories.map(card => (
                <Card 
                    layout="categories"
                    buttonText="SHOP" 
                    cardText={card.text}
                    image={card.image} 
                />
            ))
        }
        
    </div>
);

export default MainCategories;