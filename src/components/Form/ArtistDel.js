import React, { Component } from 'react';
import _ from 'lodash';
import Axios from 'axios';
import './Artist.css';

class ArtistDel extends React.Component {
  
    state = {
      name:'',
      birth:'',
    followers:'',
    album: ''
  }
  handleChange = event => {
      this.setState({ name: event.target.value,});
  }

  handleSubmit = event => {
      event.preventDefault();
  
      Axios.delete('http://localhost:3000/artists/', {
        name: this.state.name,
        birth: this.state.birth,
        followers: this.state.followers,
        album: this.state.album
      })

      }
    
    render() {
     // console.log("thiq.staet", this.state);
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
           Suppression d'un artiste 
        <p>Nom et prénom</p>
        <input type="text" name="name" onChange={this.handleChange}/>
        </label>
          <p><button class="btn" type="submit">Ajout</button></p>
        </form>
      );
    }
}export default ArtistDel;