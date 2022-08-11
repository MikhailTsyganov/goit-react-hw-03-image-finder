import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = { pics: null };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchName}&page=1&key=23348722-ce6138f5525b6382824043b6d&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(pics => {
          this.setState({ pics });
        });
    }
  }

  render() {
    console.log(this.state.pics);
    return (
      <ul className="gallery">
        {this.state.pics &&
          this.state.pics.hits.map(onePic => {
            console.log(onePic);
            return (
              <ImageGalleryItem key={onePic.id} img={onePic.webformatURL} />
            );
          })}
      </ul>
    );
  }
}

export default ImageGallery;
