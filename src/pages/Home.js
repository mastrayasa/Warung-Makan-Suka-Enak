import React, { Component} from 'react'; 

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import SliderUtama from "../components/SliderUtama"
import Album from "../components/Album"


export default class Home extends Component{
    render(){
        return (
          <div>
            <SliderUtama />

            <Container> 
 
              <Row className="pt-1">
                <Col lg md xs md2 className="text-center pt-5"> 
                    <h1>Kenapa Kami Berbeda ?</h1>
                    <p className="text-muted lead">Kami hadir untuk membuat anda bahagia, kami bahagia melihat anda kenyang</p>
                </Col>
              </Row>

              <Row>
                <Col lg md xs md2 className="text-center p-5">
                    <Image className="mb-2" src="https://banuamentor.com/assets/img/pembayaran.png" width="120" />
                    <h3>Enak</h3>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Col>

                <Col lg md xs md2 className="text-center p-5">
                    <Image className="mb-2" src="https://banuamentor.com/assets/img/pembayaran.png" width="120" />
                    <h3>Nyaman</h3>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Col>

                <Col lg md xs md2 className="text-center p-5">
                    <Image className="mb-2" src="https://banuamentor.com/assets/img/pembayaran.png" width="120" />
                    <h3>Ekonomis</h3>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Col>
              </Row> 
            </Container>


             <Container>
                <Jumbotron>
                    <h1>Makan Mantap!</h1>
                    <p className="lead">Curabitur posuere quam vel nibh. Cras dapibus dapibus nisl. Vestibulum quis dolor a felis congue vehicula. Maecenas pede purus, tristique ac, tempus eget, egestas quis, mauris. Curabitur non eros. Nullam hendrerit bibendum justo. Fusce iaculis, est quis lacinia pretium, pede metus molestie lacus, at gravida wisi ante at libero.</p>
                    <p><Button variant="success">Makan Sekarang</Button></p>
                </Jumbotron>
            </Container>



            <Album />

            <div className="pb-5">
                <Container> 
 
                    <Row className="pt-1">
                        <Col lg md xs md2 className="text-center pt-5"> 
                            <h1 class="cover-heading">Jika anda merasa <b>Lapar</b> di tengah malam <b>Ajak Teman</b><br />makan bareng untuk dapat <strong>Gratis</strong> seporsi ikan bakar
                        </h1>

                        </Col>
                    </Row> 
                </Container>
            </div>

            <div className="pb-5">
                <Container>  
                    <Row className="pt-1">
                        <Col lg md xs md2 className="pt-5"> 
                            <Alert variant="info">
                                <Alert.Heading>Jangan sampai lupa</Alert.Heading>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.
                                </p>
                            </Alert> 
                        </Col>
                    </Row> 
                </Container>
            </div>





          </div> 
        );
    }
}