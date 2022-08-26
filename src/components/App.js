import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ShowMoreButton from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

import pixabayAPI from '../services/pixabay-api';
import s from './App.module.css';

class App extends Component {
  state = {
    searchName: '',
    page: 1,
    pics: null,
    showButton: false,
    largeImage: '',
    showModal: false,
    showLoader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      this.state.page !== prevState.page
    ) {
      pixabayAPI(this.state.searchName, this.state.page)
        .then(pics => {
          if (pics.hits.length === 0) {
            return toast.error('Ничего не нашлось, попробуй изменить запрос');
          } else {
            let newPics;
            this.setState({ showButton: true });
            if (this.state.pics) {
              newPics = [...prevState.pics, ...pics.hits];

              newPics.length === pics.totalHits
                ? this.setState({ showButton: false, showLoader: false })
                : this.setState({ showButton: true, showLoader: false });

              this.onScroll();
            } else {
              newPics = [...pics.hits];
            }
            this.setState({ pics: newPics });
          }
        })
        .catch(error => toast.error(error));
    }
  }

  getNameFromSeacrhbar = data => {
    if (data)
      this.setState({
        searchName: data,
        page: 1,
        pics: null,
        showButton: false,
      });
  };

  onClickShowMore = e => {
    this.setState({
      page: this.state.page + 1,
      showButton: false,
      showLoader: true,
    });
  };

  onScroll = () => {
    if (this.state.page > 1) {
      setTimeout(() => {
        window.scrollBy({
          top: window.innerHeight - 200,
          behavior: 'smooth',
        });
      }, 300);
    }
  };

  getLargeImage = src => {
    this.setState({ largeImage: src });
    this.setState({ showModal: true });
  };

  onCloseModal = e => {
    this.setState({ showModal: false, largeImage: '' });
  };

  render() {
    const { pics, showButton, showLoader, showModal, largeImage } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.getNameFromSeacrhbar} />
        <ImageGallery pics={pics} onGetSrc={this.getLargeImage} />
        {showButton && (
          <ShowMoreButton onClickShowMore={this.onClickShowMore} />
        )}
        {showLoader && <Loader />}
        {showModal && (
          <Modal src={largeImage} onCloseModal={this.onCloseModal} />
        )}
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}

export default App;
