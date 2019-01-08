import React from 'react';


class Sides extends React.Component {

    render() {
        return (
            <div className="sides">
                <ul>
                    <li>
                        <h2>Onion Rings</h2>
                        <h3 className="price">large $3.99</h3>
                        <h3 className="priceSm">small $2.99</h3>
                    </li>
                    <li>
                        <h2>French Fries</h2>
                        <h3 className="price">large $3.49</h3>
                        <h3 className="priceSm">small $1.89</h3>
                    </li>
                    <li>
                        <h2>Soup</h2>
                        <h3 className="price">large $3.50</h3>
                        <h3 className="priceSm">small $2.50</h3>
                    </li>
                    <li>
                        <h2>Chili</h2>
                        <h3 className="price">large $3.99</h3>
                        <h3 className="priceSm">small $2.99</h3>
                    </li>
                    <li>
                        <h2>Mozz Sticks</h2>
                        <h3 className="price"><strong className="id">9 pc.</strong> $5.99</h3>
                        <h3 className="priceSm"><strong className="id">6 pc.</strong> $4.49</h3>
                    </li>
                    <li>
                        <h2>Chicken Nuggets</h2>
                        <h3 className="price"><strong className="id">9 pc.</strong> $3.99</h3>
                        <h3 className="priceSm"><strong className="id">6 pc.</strong> $2.99</h3>
                    </li>
                    <li>
                        <h2>Chicken Fingers</h2>
                        <h3 className="price"><strong className="id">9 pc.</strong> $5.99</h3>
                        <h3 className="priceSm"><strong className="id">6 pc.</strong> $4.49</h3>
                    </li>
                    <li>
                        <h2>Wing Dings</h2>
                        <h3 className="price"><strong className="id">9 pc.</strong> $5.99</h3>
                        <h3 className="priceSm"><strong className="id">6 pc.</strong> $4.49</h3>
                    </li>
                </ul>
            </div>
        )
    }
};

export default Sides;

