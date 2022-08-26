import { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  static propTypes = {
    pics: PropTypes.arrayOf(PropTypes.shape),
    onGetSrc: PropTypes.func.isRequired,
  };

  render() {
    const { pics, onGetSrc } = this.props;

    return (
      pics && (
        <div>
          <ul className={s.ImageGallery}>
            {pics.map(onePic => {
              return (
                <ImageGalleryItem
                  key={onePic.id}
                  img={onePic.webformatURL}
                  largeImg={onePic.largeImageURL}
                  alt={onePic.tags}
                  onGetSrc={onGetSrc}
                />
              );
            })}
          </ul>
        </div>
      )
    );
  }
}

export default ImageGallery;
