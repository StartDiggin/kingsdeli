import React from 'react';


class WrapsSalads extends React.Component {

    render() {
        return (
            <div className="menuItems">
                <ul>
                    <li>
                        <h2 className="id">#30</h2>
                        <h2>Roast Beef, Fresh Mozz, Roasted Peppers & Horesradish Sauce</h2>
                        <h3 className="price">$6.50</h3>
                    </li>
                    <li>
                        <h2 className="id">#31</h2>
                        <h2>Turkey B.L.T. w/ Mayo</h2>
                        <h3 className="price">$6.50</h3>
                    </li>
                    <li>
                        <h2 className="id">#32</h2>
                        <h2>Grilled Chicked BLT w/ Mayo</h2>
                        <h3 className="price">$6.50</h3>
                    </li>
                    <li>
                        <h2 className="id">#33</h2>
                        <h2>Chicken Cutlet B.L.T. w/ Mayo</h2>
                        <h3 className="price">$6.50</h3>
                    </li>
                    <li>
                        <h2 className="id">#34</h2>
                        <h2 >Grilled Chicken Caesar</h2>
                        <h3 className="price">$5.99</h3>
                    </li>
                    <li>
                        <h2 className="id">#35</h2>
                        <h2>Eggplant Fresh Mozzarella, Roasted Peppers & Balsamic Vinegar</h2>
                        <h3 className="price">$6.50</h3>
                    </li>
                    <li className="salads">
                        <h2>Tossed Salad</h2>
                        <h3 className="price">$4.49</h3>
                    </li>
                    <li className="salads">
                        <h2>Chef Salad</h2>
                        <h3 className="price">$5.99</h3>
                    </li>
                    <li className="salads">
                        <h2>Grilled Chicken Salad</h2>
                        <h3 className="price">$5.99</h3>
                    </li>
                </ul>
            </div>
            
        )
    }
};

export default WrapsSalads;

