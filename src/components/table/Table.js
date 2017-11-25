import React, {Component} from 'react'
import './Table.css'

class Table extends Component {

    render()  {
        return (
            this.props.mesas.map(mesa => {
                return (
                    <div key={mesa.comandas_id} className="card-wrapper col-sm-3">
                        <div className="card" id={mesa.mesa}>
                            <div className="card-title"><h4>{mesa.mesa}<span className="card-zone">/{mesa.zonas_nombre}</span></h4></div>
                            <div className="card-body card-body-up column"><p className="card-waiter-name">{mesa.nombres}</p></div>
                            <div className="card-body card-body-down">
                                <button className="btn-charge btn-card" value={mesa.comandas_id}><i className="fa fa-money" aria-hidden="true"></i></button>
                                <div>hola</div>
                                <div>hola</div>
                                <div>hola</div>
                                <div>hola</div>
                                <div>hola</div>
                                <button className="btn-add-items-order btn-card" value={mesa.comandas_id} onClick={this.props.addItemToOrder}>+</button>
                            </div>
                        </div>
                    </div>
                )
            })
        );
    }
}

export default Table;