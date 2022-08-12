import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';

class ImageGallery extends Component {
  state = {
    pics: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${this.props.searchName}&page=1&key=23348722-ce6138f5525b6382824043b6d&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }

          return Promise.reject(
            toast.error('Ничего не нашлось, попробуй изменить запрос')
          );
        })
        .then(pics => this.setState({ pics, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    console.log(this.state.pics);
    const { pics, error, status } = this.state;

    if (status === 'pending') {
      return <div>Загружаем...</div>;
    }

    if (status === 'rejected') {
      return <div>{error.message}</div>;
    }

    if (status === 'resolved') {
      if (pics.hits.length === 0) {
        toast('ИСПРАВИТЬ');
        return (
          <div>
            {`На сервере не нашлось картинок по запросу "${this.props.searchName}"`}
          </div>
        );
      }

      return (
        <div>
          <ul className="gallery">
            {pics.hits.map(onePic => {
              // console.log(onePic);
              return (
                <ImageGalleryItem
                  key={onePic.id}
                  img={onePic.webformatURL}
                  alt={onePic.tags}
                />
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

export default ImageGallery;
