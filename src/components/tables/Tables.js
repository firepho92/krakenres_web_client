import React, { Component } from 'react'
import {Container, Row, Col, Button, Form, FormGroup} from 'reactstrap'
import {setTable, getTables} from '../../API/comandas'
import Table from '../table/Table'
import Loading from '../loading/Loading'
import NewOrderItem from '../newOrderItem/NewOrderItem'
import './Tables.css'

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      mesas: [],
      newItem: false
    })
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addItemToOrder = this.addItemToOrder.bind(this)
    this.dismiss = this.dismiss.bind(this)
  }

  componentDidMount() {
    var self = this;
    function updateOrders () {
      setTimeout(function () {
        var mesas = new Promise((resolve, reject) => {
          resolve(getTables())
        })
        Promise.all([mesas]).then(values => {
          self.setState({
            mesas: values[0]
          })
        })

        if (true) {
          updateOrders()
        }
      }, 500)
    }
    updateOrders()
  }

  addItemToOrder(order){
    this.setState({
      newItem: order.target.value
    })
  }

  dismiss(){
    this.setState({
      newItem: false
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const mesas = this.state.mesas;
    const mesa = {mesero: this.waiter.value, zona: this.zone.value, mesa: this.table.value.toUpperCase()}
    setTable(mesa)

    this.table.value = ''
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="align-self-center" sm="10" md="10" lg={{size: 10}}>
              <h4>Agregar Mesa</h4>
              <Form inline onSubmit={this.handleSubmit}>
                <FormGroup>
                  <select id="waiter" type="select" className="form-control select-input" autoFocus ref={(input) => this.waiter = input}>
                    {this.props.meseros.map(mesero => {
                    return (<option value={mesero.usuarios_id} key={mesero.usuarios_id}>{mesero.nombres}</option>)
                    })}
                  </select>
                </FormGroup>
                &nbsp;&nbsp;
                <FormGroup>
                  <select type="select" className="form-control select-input" ref={(input) => this.zone = input}>
                    {this.props.zonas.map(zona => {
                      return (<option value={zona.zonas_id} key={zona.zonas_id}>{zona.zonas_nombre}</option>)
                    })}
                  </select>
                </FormGroup>
                &nbsp;&nbsp;
                <FormGroup>
                  <input className="form-control text-input" type="text" placeholder="Mesa" ref={(input) => this.table = input} required autoComplete="false"/>
                </FormGroup>
                &nbsp;&nbsp;
                <Button outline className="submit-btn">Agregar</Button>
              </Form>
            </Col>
          </Row>
            <Col sm="12" className="align-self-center">
              <br/>
              <hr width="50%"/>
              <br/>
            </Col>
          <Row>
            {this.state.mesas.length > 0 ? <Table mesas = {this.state.mesas} addItemToOrder = {this.addItemToOrder}/> : <Loading/>}
          </Row>
        </Container>
        {!this.state.newItem ? null : <NewOrderItem comanda = {this.state.newItem} dismiss = {this.dismiss}/>}
      </div>
    );
  }
}

export default Tables;
