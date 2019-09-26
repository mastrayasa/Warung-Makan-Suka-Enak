import React, { Component} from 'react'; 

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import SliderUtama from "../components/SliderUtama"


export default class Home extends Component{
    render(){
        return (
          <div>
            <SliderUtama />

            <Container> 
 
              <Row className="pt-1">
                <Col lg md xs md2 className="text-center pt-5"> 
                    <h1>Selamat Datang</h1>
                    <p className="text-muted">Use the rounded, roundedCircle and thumbnail props to customise the image.</p>
                </Col>
              </Row>

              <Row>
                <Col lg md xs md2 className="text-center p-5">
                    <Image src="https://banuamentor.com/assets/img/pembayaran.png" width="100" />
                    <h3>Murah</h3>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Col>

                <Col lg md xs md2 className="text-center p-5">
                    <Image src="https://banuamentor.com/assets/img/pembayaran.png" width="100" />
                    <h3>Murah</h3>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Col>

                <Col lg md xs md2 className="text-center p-5">
                <Image src="https://banuamentor.com/assets/img/pembayaran.png" width="100" />
                    <h3>Murah</h3>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Col>
              </Row>

            </Container>
          </div> 
        );
    }
}