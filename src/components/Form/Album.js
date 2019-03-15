import React, { Component } from 'react';


class Album extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        value2:'',
        value3:'',
        value4:'',
        value5:''
      };
      
  
      this.handleChange = this.handleChange.bind(this);
     
    }
  
    
    handleChange(event) {
      this.setState({sub: event.target.sub});
    }
   
    
  
    render() {
      return (
        <form>
          <label>
            ALBUMS
        <p>Title</p>
        <input type="text"/>
        <p>Date</p> 
        <input type="text" value2={this.state.value2} onChange={this.handleChange}/>
        <p>Style</p>
        <input type="text" value3={this.state.value3} onChange={this.handleChange}/>
        <p>Cover</p>
        <input className="Albums" type="text" value4={this.state.value4} onChange={this.handleChange}/>
        <p>Tract</p>
        <input type="text" value5={this.state.value5} onChange={this.handleChange}/>
          </label>
          <br/>
          <input type="submit" sub="Submit" />
        </form>
      );
    }
}export default Album;