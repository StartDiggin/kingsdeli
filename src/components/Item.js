import React from 'react'

class Item extends React.Component {

    render() {
        return (
          <li>
            #{this.props.item.id}
            Name: {this.props.item.name}
            Price: {this.props.item.priceSm}
            Price: {this.props.item.priceLg}
          </li>
        )
    }
}

export default Item;