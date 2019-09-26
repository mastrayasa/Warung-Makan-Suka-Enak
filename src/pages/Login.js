import React, { Component} from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import SliderUtama from "../components/SliderUtama"

export default class Login extends Component{
    render(){
        return (
            <div>
            

            <Container> 
 
              <Row className="pt-1">
                <Col md={{ span: 4, offset: 4 }} xs md2 className="pt-5"> 
                     
                    
                    <Card>
						<Card.Header>Masuk dulu gaes</Card.Header>
						<Card.Body> 
							

							<Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>

							<Button variant="success">Masuk</Button>
						</Card.Body>
					</Card>

                    


                </Col>
              </Row> 

            </Container>
          </div> 
        );
    }
}