import React, { Component} from 'react'; 

 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

 

export default class Album extends Component{
    render(){
        return (
            <div className="mt-5"> 

            <Container>  

            	<Row> 
             	<Col lg md xs md className="text-center pb-4"> 
                    <h1>Menu Spesial</h1>
                    <p className="lead">Kami siapkan santap siang luar biasa untuk anda asli masakan Indonesia</p>
                </Col>
             </Row>


              <Row>
                <Col lg md xs md className="pb-5"> 
					<Card>
						<Card.Img variant="top" src="./img/makanan-1.jpg" />
						<Card.Body>
							<Card.Title>Ayam Bakar</Card.Title>
							<Card.Text>
								<strong className="text-danger">Rp. 25.000</strong><br />
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</Card.Text>
							<Button variant="success">Pesan Sekarang</Button>
						</Card.Body>
					</Card>
                </Col>

               	<Col lg md xs md className="pb-5"> 
					<Card>
						<Card.Img variant="top" src="./img/makanan-1.jpg" />
						<Card.Body>
							<Card.Title>Rendang Goreng</Card.Title>
							<Card.Text>
								<strong className="text-danger">Rp. 89.000</strong><br />
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</Card.Text>
							<Button variant="success">Pesan Sekarang</Button>
						</Card.Body>
					</Card>
                </Col>

                <Col lg md xs md className="pb-5"> 
					<Card>
						<Card.Img variant="top" src="./img/makanan-1.jpg" />
						<Card.Body>
							<Card.Title>Udang Goreng</Card.Title>
							<Card.Text>
								<strong className="text-danger">Rp. 78.000</strong><br />
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</Card.Text>
							<Button variant="success">Pesan Sekarang</Button>
						</Card.Body>
					</Card>
                </Col> 
              </Row>



              <Row>
                <Col lg md xs md className="pb-5"> 
					<Card>
						<Card.Img variant="top" src="./img/makanan-1.jpg" />
						<Card.Body>
							<Card.Title>Ayam Bakar</Card.Title>
							<Card.Text>
								<strong className="text-danger">Rp. 25.000</strong><br />
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</Card.Text>
							<Button variant="success">Pesan Sekarang</Button>
						</Card.Body>
					</Card>
                </Col>

               	<Col lg md xs md className="pb-5"> 
					<Card>
						<Card.Img variant="top" src="./img/makanan-1.jpg" />
						<Card.Body>
							<Card.Title>Rendang Goreng</Card.Title>
							<Card.Text>
								<strong className="text-danger">Rp. 89.000</strong><br />
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</Card.Text>
							<Button variant="success">Pesan Sekarang</Button>
						</Card.Body>
					</Card>
                </Col>

                <Col lg md xs md className="pb-5"> 
					<Card>
						<Card.Img variant="top" src="./img/makanan-1.jpg" />
						<Card.Body>
							<Card.Title>Udang Goreng</Card.Title>
							<Card.Text>
								<strong className="text-danger">Rp. 78.000</strong><br />
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</Card.Text>
							<Button variant="success">Pesan Sekarang</Button>
						</Card.Body>
					</Card>
                </Col> 
              </Row>

            </Container> 
          </div> 
        );
    }
}