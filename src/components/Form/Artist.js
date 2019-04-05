import React, { Component } from 'react';
import _ from 'lodash';
import Axios from 'axios';

class Formulaire extends React.Component {
  /*  constructor(props) {
      super(props);
      
      this.handleChange = this.handleChange.bind(this);
      this.handleChange3= this.handleChange3.bind(this);
      this.handleChange2 =this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  */
    state = {
      name:'',
      birth:'',
      followers:''
  }
  handleChange = event => {
      this.setState({ name: event.target.value,});
  }
  handleChange2 = event => {
    this.setState({ birth: event.target.value});
}
handleChange3 = event => {
  this.setState({  followers: event.target.value});
}

  handleSubmit = event => {
      event.preventDefault();
  
      const artist = {
        name: this.state.name,
        birth: this.state.birth,
        followers: this.state.followers,
        album:this.state.album
      };
  
      Axios.put('http://localhost:3000/artists/', {
        name: this.state.name,
        birth: this.state.birth,
        followers: this.state.followers,
        album:this.state.album
      })

      Axios.post('http://localhost:3000/artists/',{
        name: this.state.name,
        birth: this.state.birth,
        followers: this.state.followers,
        album:this.state.album
      }
      )}
    
    render() {
      console.log("thiq.staet", this.state);
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Ajout - Modif d'un Artiste 
        <p>Nom et prénom</p>
        <input type="text" name="name" onChange={this.handleChange}/>
        <p>Date de Naissance</p>
        <input type="text" name="birth" onChange={this.handleChange2}/>
        <p>Nombre de followers</p>
        <input type="text" name="followers" onChange={this.handleChange3}/>
          </label>
          <button type="submit">Ajouter</button>
        </form>
      );
    }
}export default Formulaire;