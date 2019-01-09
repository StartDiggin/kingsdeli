import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <>
            <div>
                
                <ul>
                    <li><h1>Contact Info</h1></li>
                    <li><h2>Address:</h2></li>
                    <li>235 Newark Pompton Tpke</li>
                    <li>Pequannock, NJ 07440</li>
                    <li><h2>Phone:</h2></li>
                    <li>(973) 696-9496</li>
                </ul>
            </div>
            <div>
                
                <ul>
                    <li><h1>Hours</h1></li>
                    <li><h2>Mon</h2> <span>5:00am-11:00pm</span></li>
                    <li><h2>Tue</h2> <span>5:00am-11:00pm</span></li>
                    <li><h2>Wed</h2> <span>5:00am-11:00pm</span></li>
                    <li><h2>Thu</h2> <span>5:00am-11:00pm</span></li>
                    <li><h2>Fri</h2> <span>5:00am-11:00pm</span></li>
                    <li><h2>Sat</h2> <span>5:00am-10:00pm</span></li>
                    <li><h2>Sun</h2> <span>5:00am-9:00pm</span></li>
                </ul>
            </div>
            </>
        )
    }
};

export default Footer;