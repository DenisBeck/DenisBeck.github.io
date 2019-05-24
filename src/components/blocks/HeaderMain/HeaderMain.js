import React from 'react';

import classes from './HeaderMain.css';
import Button from '../../Button/Button';

const sliderNavigationItems = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
]

const SliderItem = (props) => {

    return (
        <div className={[classes.SliderItem, props.isActive ? classes.Active : ''].join(' ')}>
            <div className={classes.SliderImage}>
                <img src={props.source} alt={props.key} />
            </div>
            <div className={classes.SliderDescription}>
                <h1 className={classes.SliderHeader}>{props.title}</h1>
                <p className={classes.SliderText}>{props.text}</p>
                <Button title="SHOP NOW" />
            </div>
            <ul className={classes.SliderNavigation}>
                {sliderNavigationItems.map(item => {
                    return(
                        <li 
                            className={[classes.SliderNavigationItem, (props.isActive && item.id === props.id) ? classes.Active : ''].join(' ')} 
                            key={item.id} 
                            onClick={() => props.handleSlide(item.id)} />
                    )
                })}
            </ul>
        </div>
    )
};

const HeaderMain = (props) => {
    return(
        <div className={classes.HeaderMain}>
            <div className={classes.SliderContainer}>
                {props.sliderItems.map(sliderItem => (
                    <SliderItem 
                        isActive={sliderItem.isActive}
                        source={sliderItem.imgSrc}
                        title={sliderItem.title}
                        text={sliderItem.text}
                        id={sliderItem.id}
                        key={sliderItem.id}
                        handleSlide={(id) => props.handleSliderItemClick(id)}
                    />
                ))}
            </div>
            
         </div>
    );
};

export default HeaderMain;