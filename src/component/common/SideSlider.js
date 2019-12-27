import React, { Component } from 'react'

export default class SideSlider extends Component {

  state = {
    menuItems : this.props.menuItems
  }

  closeNav = () => {
    this.props.closeSlider()
  }


  static getDerivedStateFromProps(props, state) {
    return null;
  }

  render() {
    const { menuItems } = this.state 
    const dis_menuItems = menuItems.map((d) => <a href="#" key={menuItems.indexOf(d)}>{d}</a>)

    return (
      <div id="mySidenav" className={`sidenav shadow-xl ${this.props.isSliderOpen}`}>
        <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
        {dis_menuItems}
      </div>
    )
  }
}




