import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = { searchName: 'apes', loading: false };

  getNameFromSeacrhbar = data => {
    if (data) this.setState({ searchName: data });
  };

  render() {
    // console.log(this.state.pics);
    // console.log(this.state.searchName);
    return (
      <div>
        <Searchbar onSubmit={this.getNameFromSeacrhbar} />
        <ImageGallery searchName={this.state.searchName} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
