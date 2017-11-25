import React, {Component} from 'react'
import './ObtainedProduct.css'

class ObtainedProduct extends Component {

    render() {
        return(
            this.props.products.map(product => {
                return (
                    <tr key={product.productos_id}><td id={product.productos_id} data-comanda={this.props.order} onClick={this.props.handleClick}>{product.nombre_producto}</td></tr>
                );
            })
        )
    }
}

export default ObtainedProduct;
