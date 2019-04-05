/*import React, {PureComponent} from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import Axios from 'axios';
import _ from 'lodash';
/*
const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

export default class Gallery2 extends PureComponent {

  state = {
    coversAlbums: []
}

  componentDidMount() {
    Axios.get('http://localhost:3000/albums/pic')
    .then(res => {
        const coversAlbums = res.data;
        this.setState({coversAlbums});
    })
}
  render() {

  return (
    <Gallery images={this.state.coversAlbums}/>,
document.getElementById('example-0')
  );
}
}
*/
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';
import Axios from 'axios'
import './Gallery.css';
class Gallery extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

  state = {
    albumPic: []
}
componentDidMount() {
  Axios.get('http://localhost:3000/albums/pic')
  .then(res => {
      const albumPic = res.data;
      console.log(res.data);
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
      <ImageGallery items={this.state.albumPic} />
    );
  }
 
}export default Gallery;