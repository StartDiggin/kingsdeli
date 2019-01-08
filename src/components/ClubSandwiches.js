import React from 'react';


class ClubSandwiches extends React.Component {

    render() {
        return (
            <div className="menuItems">
                <ul>
                    <li>
                        <h2 className="id">#26</h2>
                        <h2>Turkey</h2>
                        <h3 className="price">$6.50</h3>
                    </li>
                    <li>
                        <h2 className="id">#27</h2>
                        <h2>Sloppy Joes</h2>
                        <h3 className="price">$6.50</h3>
                    </li>
                    <li>
                        <h2 className="id">#28</h2>
                        <h2>B.L.T w/ Mayo on Toast</h2>
                        <h3 className="price">$4.69</h3>
                    </li>
                    <li>
                        <h2 className="id">#29</h2> 
                        <h2>Grilled Cheese w/ Bacon & Tomato on Bread</h2>
                        <h3>$4.69</h3>
                    </li>
                </ul>
            </div>
            
        )
    }
};

export default ClubSandwiches;

