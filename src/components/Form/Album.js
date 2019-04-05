import React, { Component } from 'react';
import Axios from 'axios';

class Album extends Component {
    
    state = {
        title: '',
        release:'',
        style:'',
        original:'',
        vente: ''
        
      };
  handleChange = event => {
        this.setState({ title: event.target.value,});
  }
  handleChange2 = event => {
      this.setState({ release: event.target.value});
  }
  handleChange3 = event => {
    this.setState({ style: event.target.value});
  }
  handleChange4 = event => {
    this.setState({ original: event.target.value});
  }
  handleChange5 = event => {
    this.setState({ vente: event.target.value});
  }
  
    
    handleSubmit = event => {
     event.preventDefault();

     const album = {
      title: this.state.title,
      release: this.state.release,
      style: this.state.style,
      original:this.state.original,
      vente: this.state.vente
     }

     Axios.put('http://localhost:3000/albums/', {
      title: this.state.title,
      release: this.state.release,
      style: this.state.style,
      original:this.state.original,
      vente: this.state.vente  
      })

    }
   
    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}> 
          <label>
            Ajouter votre album préféré
        <p>Title</p>
        <input type="text" name="title" onChange={this.handleChange}/>
        <p>Date</p> 
        <input type="text" name="release" onChange={this.handleChange2}/>
        <p>Style</p>
        <input type="text" name="style" onChange={this.handleChange3}/>
        <p>Cover url</p>
        <input type="text" name="original" onChange={this.handleChange4}/>
        <p>Vente</p>
        <input type="text" name="vente" onChange={this.handleChange5}/>
  
          </label>
          <br/>
          <p><button class="btn" type="submit">Ajouter</button></p>
        </form>
      );
    }
}export default Album;