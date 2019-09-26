import React, { Component} from 'react'; 

 
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
 

export default class SliderUtama extends Component{
    render(){
        return (
            <Container className="mt-4">
            <Row>
            <Col>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.rumahweb.com/promosi/img/xyz-bg.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.rumahweb.com/promosi/img/colren-2019-bg.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
</Col>
</Row>
</Container> 
        );
    }
}