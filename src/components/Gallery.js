import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';
import './Gallery.css';
class Gallery extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

  state = {
    albumPic: []
}
componentDidMount() {
  Axios.get('http://localhost:3000/album/pic')
  .then(res => {
      const albumPic = res.data;
      this.setState({albumPic});
  })
}
 
  render() {
 
    /*const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]*/
 
    return (
      <ImageGallery items={albumPic} />
    );
  }
 
}export default Gallery;