import React from 'react';


class Hamburgers extends React.Component {

    render() {
        return (
            <div className="menuItems">
                <ul>
                    <li>
                        <h2>Cheeseburger</h2>
                        <h3 className="price">$3.99</h3>
                    </li>
                    <li>
                        <h2>Bacon Cheeseburger</h2>
                        <h3 className="price">$4.99</h3>
                    </li>
                    <li>
                        <h2>California Cheesburger W/ Lettuce, Tomato & Onion</h2>
                        <h3 className="price">$4.49</h3>
                    </li>        
                </ul>
            </div>
            
        )
    }
};

export default Hamburgers;

