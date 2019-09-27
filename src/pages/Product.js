import React, { Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image' 
import { storeProducts } from "../data"
import {ProductConcumer} from '../context';
import ProductItem from '../components/ProductItem'
export default class Product extends Component{

    state = {
        products: storeProducts
    }

    
    render(){

         
        return (
            <React.Fragment>
            <Container> 

            <Row className="pt-1">
                <Col lg md xs className="text-center pt-5"> 
                    <h1>Produk Unggulan</h1>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Col>
              </Row> 

              <Row className="pt-1"> 
                <ProductConcumer>
                    {value => {
                        return value.products.map( product => {
                            return <ProductItem key={product.id} product={product} />
                        })
                    }}
                </ProductConcumer> 
              </Row> 
            </Container>
          </React.Fragment> 
        );
    }
}