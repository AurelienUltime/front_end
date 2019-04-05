
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';
import Axios from 'axios'
import './Gallery.css';
import _ from 'lodash';
class Gallery extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

  state = {
    albumPic: []
}
componentDidMount() {
  Axios.get('http://localhost:3000/albums/pic')
  .then(res => {
      const albumPic = res.data;
        const albumPic2 = _.map(albumPic,function(e){
            var ob = new Object();
            ob.original = e.original;
            ob.thumbnail = e.thumbnail;
            ob.sizes = '50%';
            console.log(ob);
            return ob;
            

        })
      console.log(res.data);
      this.setState({albumPic: albumPic2});

    })  
  
}

 
  render() {
 
    return (
      <ImageGallery items={this.state.albumPic} />
    );
  }
 
}export default Gallery;