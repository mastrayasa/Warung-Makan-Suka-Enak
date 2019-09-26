import React, { Component} from 'react'; 

 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

 

export default class Footer extends Component{
    render(){
        return (
            <div className="footer mt-5"> 

            <Container>  
              <Row>
                <Col lg md xs md2 className="pt-5 pb-5"> 
                    <h3>Tentang Kami</h3>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero</p>
                </Col>

               	<Col lg md xs md2 className="pt-5"> 
                    <h3>Murah</h3>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Col>

                <Col lg md xs md2 className="pt-5"> 
                 
                    <h3>Murah</h3>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Col>
              </Row>

            </Container> 
          </div> 
        );
    }
}