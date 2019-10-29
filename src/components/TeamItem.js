import React, { Component} from 'react'; 
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

 

export default class TeamItem extends Component{
    render(){
        return (
            <Col className="text-center pt-5"> 
                <Image className="mb-3 rounded-circle img-center img-fluid shadow shadow-lg--hover" src="./img/person/team-1.jpg" width="180" />
                <h5 class="cover-heading">{this.props.name}</h5>
                <p className="text-muted">{this.props.job}</p> 
            </Col> 
        );
    }
}