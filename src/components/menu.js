import React from 'react';
import text from './menu.json';
import Item from './Item';

class Menu extends React.Component {
    state = {
        menu: {},
        arr3: [],
        Hot_Sandwiches: [],
        Cold_Sandwiches: [],
        Club_Sandwiches: [],
        Wraps_Salads: [],
        Hamburgers: [],
        Sides: [],
        Breakfast_Specials: [],
    }

    componentDidMount = async() => {
        const  fullMenu = {...text};
        // console.log(fullMenu, 'adsfasdfa')
        await this.setState({menu: fullMenu })
        const arr5 = [];
        Object.keys(fullMenu).map(function (i) {
            return arr5.push(fullMenu[i]);
          });
        //   console.log(arr5)
          this.setState({arr3:arr5})
        this.getMenuItems();
    }

    getMenuItems = () => {
        let m1 = {...this.state.arr3}
        this.setState({
            Hot_Sandwiches: m1[0], 
            Cold_Sandwiches: m1[1],
            Club_Sandwiches: m1[2],
            Wraps_Salads: m1[3],
            Hamburgers: m1[4],
            Sides: m1[5],
            Breakfast_Specials: m1[6]})
    }
    
   
    
    
    render() {
        return (
            <div className="menu" type="text/babel">
                <h1>Breakfast</h1>
                <div>
                    <ul>
                        {this.state.Breakfast_Specials.map((item) => {
                            return <Item item={item} />
                        })}
                    </ul>
                </div>
            </div>
        )
    }
};

export default Menu;

