import React from 'react'
import classes from './ProductDetails.module.css'


const ProductDetails = (props) => {
 
    const colorOptions = props.data.colorOptions.map((item,pos)=>{

        const classArr = [classes.ProductImage]

        if(pos === props.currentPreviewImage){
            classArr.push(classes.SelectedProductImage) ;
        }
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.stylename} onClick={()=>props.onColorOptionClick(pos)}/>
        );
    })

    const FeatureList = props.data.featureList.map((item,pos)=>{
        const classArr = [classes.FeatureItem];
        if(pos ===1 && props.showHeartBeatSection){
            classArr.push(classes.SelectedFeatureItem);
        }
        else if(pos === 0 && !props.showHeartBeatSection){
            classArr.push(classes.SelectedFeatureItem)
        }
        return(
            <button onClick={()=>props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        )
    })

return (
    <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            {colorOptions}
           {/*
             <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png"/>
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png"/>
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png"/>
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png"/> 
            */}
          </div>
          
          <h3 className={classes.SectionHeading}>Features</h3>
            <div>
              {FeatureList}
            </div>
            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
  )
}

export default ProductDetails