import React from 'react';
const fullMenu = require('../menu.json')

class Menu extends React.Component {
    state = {
        menu: {}
    }

   componentDidMount = () => {
       const menu = {...fullMenu}
       this.setState({menu})
   }
    
    
    render() {
        return (
            <div className="menu" type="text/babel">
                <h1>Breakfast</h1>
                <h2>Menu is below</h2>
            </div>
        )
    }
};

export default Menu;

