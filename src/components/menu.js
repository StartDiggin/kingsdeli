import React from 'react';
import HotSandwiches from './HotSandwiches';
import Sides from './Sides';
import ColdSandwiches from './ColdSandwiches';
import Hamburgers from './Hamburgers';
import ClubSandwiches from './ClubSandwiches';
import WrapsSalads from './WrapsSalads';
import Footer from './Footer';


class Menu extends React.Component {

    render() {
        return (
            <div className="menu">
                <div className="menuItems">
                    <h1>Breakfast</h1>
                    <hr/>
                    <ul>
                        <li>
                            <h2>Egg & Cheese</h2>
                            <h3 className="price">$2.09</h3>
                        </li>
                        <li>
                            <h2>3 Eggs Whites w/ Cheese</h2>
                            <h3 className="price">$3.09</h3>
                        </li>
                        <li>
                            <h2>Taylor Ham, Bacon or Sausage</h2>
                            <h3 className="price">$2.99</h3>
                        </li>
                        <li className="extras"> 
                            <h2>w/ Egg or Cheese</h2>
                            <h3>$3.29</h3>
                        </li>
                        <li>
                            <h2>Turkey, 2 Egg Whites Wrap</h2>
                            <h3 className="price">$4.69</h3>
                        </li>
                        <li>
                            <h2>3 Egg Omelette,  (Ham or Bacon) </h2><br/>
                            <h2 className="options">w/ Onions, Peppers, Cheese & White Toast</h2>
                            <h3 className="price">$4.69</h3>
                        </li>
                    </ul>
                </div>
                <div className="menuItems">
                    <h1>Extras</h1>
                    <hr/>
                    <ul>
                        <li>
                            <h2>Hash Browns</h2>
                            <h3 className="price">$1.00</h3>
                        </li>
                        <li>
                            <h2>Extra Egg</h2>
                            <h3 className="price">$0.50</h3>
                        </li>
                        <li>
                            <h2>Extra Cheese</h2>
                            <h3 className="price">$0.50</h3>
                        </li>
                        <li>
                            <h2>Extra Meat</h2>
                            <h3 className="price">$1.00</h3>
                        </li>
                    </ul>
                </div>
                <div className="menuItems">
                    <h1>Hot Sandwiches</h1>
                    <hr/>
                    <HotSandwiches />
                </div>
                <div className="menuItems">
                    <h1>Sides</h1>
                    <hr/>
                    <Sides />
                </div>
                <div className="coldSandwiches">
                    <h1>Cold Sandwiches</h1>
                    <hr/>
                    <ColdSandwiches />
                </div>
                <div className="clubSandwiches">
                    <h1>Club Sandwiches</h1>
                    <hr/>
                    <ClubSandwiches />
                </div>
                <div className="wrapsSalads">
                    <h1>Wraps & Salads</h1>
                    <hr/>
                    <WrapsSalads />
                </div>
                <div className="hamburgers">
                    <h1>Hamburgers</h1>
                    <hr/>
                    <Hamburgers />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
};

export default Menu;

