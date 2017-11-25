import React, {Component} from 'react'
import './NewOrderItem.css'
import {getProductsByNameLike, getProductsById} from '../../API/productos'
import ObtainedProduct from '../obtainedProduct/ObtainedProduct'
import {escapeHtml} from '../../sanitize/index'

class NewOrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          obtainedProducts: [],
          candidateProducts: []
        })
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        var e = event.target, flag = 0
        var products = []
        var product = {
            id: e.id,
            order: e.dataset.comanda,
            item: e.innerHTML,
            quantity: 1
        }
        products = this.state.candidateProducts
        if(products.length != 0){
            
        }else{
            products.push(product)
            this.setState({
                candidateProducts: products
            })
        }
        console.log(this.state.candidateProducts)
        /*var candidateProduct = new Promise((resolve, reject) => {
            resolve(getProductsById(event.target.id))
        })

        Promise.all([candidateProduct]).then(values => {
            console.log(values[0])
        })*/
    }

    handleSubmit(event){
        event.preventDefault()
        var str = escape(this.product.value)

        str = escapeHtml(str)

        if(this.product.value.length >= 1){
            var obtainedProducts = new Promise((resolve, reject) => {
                resolve(getProductsByNameLike(str))
            })
            Promise.all([obtainedProducts]).then(values => {
                this.setState({
                    obtainedProducts: values[0]
                })
            })
        }else{
            this.setState({
                obtainedProducts: []
            })
        }
    }

    render() {
        return (
            <div className="blur-layer">
                <div className="item-form">
                    <div className="item-form-close" onClick={this.props.dismiss}>
                        x
                    </div>
                    <div className="row">
                        <div className="col-sm-12 item-form-title">
                            <h3>Agregar pedidos a la comanda</h3>
                        </div>
                    </div>
                    <hr/>
                    <div className="row justify-content-between">
                        <div className="col-sm-6 item-form-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control text-input" placeholder="Búsqueda" onKeyUp={this.handleSubmit} autoFocus ref={(input) => this.product = input}/>
                                </div>
                            </form>
                            <table className="table table-hover">
                                <tbody>
                                    <ObtainedProduct products = {this.state.obtainedProducts} order = {this.props.comanda} handleClick = {this.handleClick}/>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-6 item-form-body">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewOrderItem;
