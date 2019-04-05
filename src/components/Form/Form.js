import React, { Component } from 'react';
import {Container, Col, Row} from 'reactstrap';
import Artiste from './Artist';
import Album from './Album';
import './Form.css';
import ArtistDel from './ArtistDel';


class Form extends Component{


    render(){
        return(
            <center>
            <div className="affichage">
            <Album/>
            <Artiste/>
            <ArtistDel/>
            </div>
            </center>
        );
    }

}export default Form; 
