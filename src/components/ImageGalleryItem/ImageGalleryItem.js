import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ img, largeImg, alt, onGetSrc }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={img}
        alt={alt}
        onClick={() => {
          onGetSrc(largeImg);
        }}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onGetSrc: PropTypes.func.isRequired,
};
