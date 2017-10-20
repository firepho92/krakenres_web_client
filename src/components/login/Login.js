import React, { Component } from 'react'
import {Row, Col, Container, Form, FormGroup, Button} from 'reactstrap'
import {login} from '../../API/usuarios'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const user = new Promise((resolve, reject) => {
      resolve(login(this.user.value, this.password.value))
    })
    .then(res => {
      this.props.handleLogin(res)
    })
    .catch(err => {
      console.log(err);
    })

    event.preventDefault()

  }

  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center login-container">
            <Col className="align-self-center" sm="10" md="10" lg={{size: 8}}>
              <Form className="login-form" onSubmit={this.handleSubmit}>
                <h2>Entrar</h2>
                <FormGroup>
                  <label className="sr-only">Usuario</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <div className="input-group-addon"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Usuario" ref={(input) => this.user = input}/>
                  </div>
                </FormGroup>
                <FormGroup>
                  <label className="sr-only">Contraseña</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <div className="input-group-addon"><i className="fa fa-lock" aria-hidden="true"></i></div>
                    <input type="password" className="form-control" id="inlineFormInputGroup" placeholder="Contraseña" ref={(input) => this.password = input} />
                  </div>
                </FormGroup>
                <Button outline className="submit-btn">Entrar</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
