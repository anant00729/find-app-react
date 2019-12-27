import React, { Component } from 'react';
import './App.css';
import SideSlider from './component/common/SideSlider'
import Topbar from './component/common/Topbar'
class App extends Component{


  state = {
    name : 'anant',
    isSliderOpen : "close-slider",
    menuItems : [
      "About",
      "Services",
      "Clients",
      "Contact",
    ]
  }

  openSlider = () => {
    let { isSliderOpen} = this.state
    if(isSliderOpen === 'open-slider'){
      isSliderOpen = 'close-slider'
    }else {
      isSliderOpen = 'open-slider'
    }
   this.setState({
    isSliderOpen
   })
  }

  closeSlider = () => {
    this.setState({
      isSliderOpen : "close-slider"
     })
  }

  render(){
    const { isSliderOpen, menuItems } = this.state
    return (
      <div>

        <SideSlider 
        isSliderOpen={isSliderOpen} 
        closeSlider={this.closeSlider}
        menuItems={menuItems}
        />
        <Topbar 
        openSlider={this.openSlider}
        menuItems={menuItems}
        />
        
  
      </div>
    );
  }

  
}

export default App;
