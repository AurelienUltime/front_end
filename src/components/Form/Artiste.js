import React, { Component } from 'react';


class Formulaire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.state = {value2: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // Gérer tous les paramètres du conteneur Artiste
    handleChange(event) {
      this.setState({sub: event.target.sub});
     // this.setState({value2:event.target.value2});

    }
   
    handleSubmit(event) {
      alert('Vous avez ajouter un élément dans votre DashBoard' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Widget 1
        <p>Nom</p>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>Prénom</p> 
        <input type="text" value2={this.state.value2} onChange={this.handleChange}/>
        <p>Anniversaire</p>
        <input type="text" value3={this.state.value3} onChange={this.handleChange}/>
        <p>Albums</p>
        <input className="Albums" type="text" value4={this.state.value4} onChange={this.handleChange}/>
          </label>
          <input type="submit" sub="Submit" />
        </form>
      );
    }
}export default Formulaire;