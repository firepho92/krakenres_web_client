import React, { Component } from 'react'
import {Row, Col, Container, Form, FormGroup} from 'reactstrap'
import './Login.css'

class Login extends Component {

  render() {
    return (
      <login>
        <Container>
          <Row className="justify-content-center login-container">
            <Col className="align-self-center" md={{size: 6}}>
              <Form className="login-form">
                <h2>Entrar</h2>
                <FormGroup>
                  <label className="sr-only" for="inlineFormInputGroup">Usuario</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <div className="input-group-addon"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                  </div>
                </FormGroup>
                <FormGroup>
                  <label className="sr-only" for="inlineFormInputGroup">Contraseña</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <div className="input-group-addon"><i className="fa fa-lock" aria-hidden="true"></i></div>
                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                  </div>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </login>
    );
  }
}

export default Login;
