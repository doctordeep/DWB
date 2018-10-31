import React from 'react';
import './lib/components/css/Rapp.css';
import Todo from './lib/components/Todo';
import AppNotify from './lib/components/AppNotify';

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

class Card extends React.Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
class Title extends React.Component{
  render(){
    return(
    <h3> Jekyll React Components </h3>
    )
  }
}
class Footer extends React.Component {
  render(){
    return (
    <footer>Adding Footer</footer>
    );
  }
}
class Header extends React.Component {
  render(){
    return (
    <Title />
    );
  }
}
class Layout extends React.Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Todo/>
        <AppNotify/>
        <Card/>
        {/* <Footer/> */}
      </div>
    );
  }
}

import './main.css';
