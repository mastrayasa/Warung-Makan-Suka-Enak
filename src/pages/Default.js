import React, { Component} from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default class Default extends Component{
    render(){
        return (
            <div>
            

            <Container> 
 
              <Row className="pt-1">
                <Col lg md xs className="text-center pt-5"> 
                    <h1>Error 404</h1>
                    <p className="text-muted">Halaman yg anda cari tidak ditemukan</p>
                </Col>
              </Row> 

            </Container>
          </div> 
        );
    }
}