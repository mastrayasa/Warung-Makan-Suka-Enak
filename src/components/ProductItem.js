import React, { Component} from 'react'; 

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
 

import ProductConsumer from '../context'

 

export default class ProductItem extends Component{
    render(){
        const {id, title, img, price, inCart,info,company} = this.props.product
        return (
            <div className="col-9 max-auto col-md-6 col-lg-3 pb-4">
                <Card>
						<Card.Img variant="top" src="./img/makanan-1.jpg" />
						<Card.Body>
							<Card.Title>{title}</Card.Title>
							<Card.Text>
								<strong className="text-danger">${price}</strong><br />
								{company}
							</Card.Text>
							<Button className="btn-sm" variant="success">Beli</Button>
						</Card.Body>
					</Card> 
            </div> 
        );
    }
}

 