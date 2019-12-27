import React, { Component } from 'react'
import planet from '../../images/planets.png'
class Topbar extends Component {


  state = {
    menuItems : this.props.menuItems
  }


  render() {
    const { menuItems } = this.state
    
    console.log('menuItems', menuItems)
    const dis_menuItems = 
    menuItems.map((d) => {
      
      const keyName = menuItems.indexOf(d)
      let spacing = "md:px-4"
      if(keyName === menuItems.length -1){
        spacing = "md:pl-4"
      }
      //const color = keyName % 2 === 0 ? "md:bg-yellow-500" : "md:bg-blue-500"
      return (
      <li
      className={`${""} ${spacing} cursor-pointer`}
      key={keyName}>{d}</li>
      )
    })
    

    return (
      <React.Fragment>
        <div className="shadow-md bg-indigo-800 w-full h-12 px-8">
          <div className="flex flex-wrap content-center h-full">
            <div className="w-1/2 h-full flex content-center" >
              <img src={planet} 
              alt="app-icon"
              className="w-8 h-8 self-center"
              />
              <p className="self-center text-white ml-2 font-semibold text-2xl lato-font tracking-widest">Find</p>
              
            </div>

            <div className="w-1/2 h-full relative visible md:hidden ">
              <span 
              className="main-navbar absolute right-0 top-0"
              onClick={this.props.openSlider}
              ><i className="fa fa-bars text-white text-2xl"></i></span>
            </div>

            <div className="md:w-1/2 md:h-full md:relative lato-font font-semibold">
              <ul className="md:flex md:visible md:text-white md:flex-row-reverse md:flex-wrap md:text-right md:h-full md:content-center hidden">
                {dis_menuItems}
              </ul>
            </div>


          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

export default Topbar
