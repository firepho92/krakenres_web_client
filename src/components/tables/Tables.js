import React, { Component } from 'react'
import {Container, Row, Col, Button, Form, FormGroup, Input} from 'reactstrap'
import './Tables.css'

class Tables extends Component {

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="align-self-center" sm="10" md="10" lg={{size: 8}}>
              <h4>Agregar Mesa</h4>
              <Form inline>
                <FormGroup>
                  <Input type="select" className="select-input">
                    <option>Zona</option>
                  </Input>
                </FormGroup>
                &nbsp;&nbsp;
                <FormGroup>
                  <Input className="text-input" type="text" name="password" id="mesa" placeholder="Mesa" />
                </FormGroup>
                &nbsp;&nbsp;
                <Button outline className="submit-btn">Agregar</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tables;