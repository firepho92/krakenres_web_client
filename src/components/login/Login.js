import React, { Component } from 'react'
import {Row, Col, Container, Form, FormGroup, Button} from 'reactstrap'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.inputA.value + " " + this.inputB.value);
    event.preventDefault();
  }

  render() {
    return (
      <login>
        <Container>
          <Row className="justify-content-center login-container">
            <Col className="align-self-center" md={{size: 6}}>
              <Form className="login-form" onSubmit={this.handleSubmit}>
                <h2>Entrar</h2>
                <FormGroup>
                  <label className="sr-only" for="inlineFormInputGroup">Usuario</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <div className="input-group-addon"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Usuario" ref={(input) => this.inputA = input}/>
                  </div>
                </FormGroup>
                <FormGroup>
                  <label className="sr-only" for="inlineFormInputGroup">Contraseña</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <div className="input-group-addon"><i className="fa fa-lock" aria-hidden="true"></i></div>
                    <input type="password" className="form-control" id="inlineFormInputGroup" placeholder="Contraseña" ref={(input) => this.inputB = input} />
                  </div>
                </FormGroup>
                <Button outline className="submit-btn">Entrar</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </login>
    );
  }
}

export default Login;
