import React,{Component} from 'react';

import classes from './App.module.css';
import Navbar from './Navbar';
import ProductData from './ProductData';
import ProductDetails from './ProductDetails';
import ProductPreview from './ProductPreview';

class App extends Component {

  state={
    productData: ProductData,
    currentPreviewImage: 0, // currentPreviewImagePos == 0
    showHeartBeatSection: 0,

  }

   onColorOptionClick = (pos)=>{
    //const updatePreviewImage = this.state.productData.colorOptions[pos].imageUrl
    this.setState({currentPreviewImage: pos})
  }

  onFeatureItemClick = (pos)=>{
    let updateState = false;
    if(pos===1){
      updateState = true
    }
    this.setState({showHeartBeatSection:updateState})
  }

  render(){
    return (
      <div className="App">
          <Navbar />
        <div className={classes.MainContainer}>
            <div className={classes.ProductPreview}>
                <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImage].imageUrl} showHeartBeatSection={this.state.showHeartBeatSection}  />
            </div>
            <div className={classes.ProductData}>
                <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImage={this.state.currentPreviewImage} onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection} />
            </div>
        </div>
      </div>
    );
  }
  
}

export default App;
