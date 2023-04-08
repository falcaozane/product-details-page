import React from 'react'
import classes from './ProductPreview.module.css'
const ProductPreview = (props) => {
  return (
    <div className={classes.ProductPreview}>
        <img src={props.currentPreviewImage} alt='current' />
            {
                props.showHeartBeatSection ? 
                <div className={classes.HeartBeatData}>
                <i class="fa-solid fa-heart-pulse"></i>
                  <p>78</p>
                </div>
                :
                <div className={classes.TimeData}>
                    <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
                </div>
            }
            
    </div>
  );
}

export default ProductPreview