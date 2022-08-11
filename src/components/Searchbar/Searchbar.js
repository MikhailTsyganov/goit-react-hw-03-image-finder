import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = { searchName: '' };

  InputHandler = e => {
    this.setState({ searchName: e.target.value.toLowerCase() });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    if (this.state.searchName.trim() === '') {
      console.log('412414244234');
      toast.error('Введите то, что хотите найти');
      return;
    }

    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    const { searchName } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmitHandler}>
          <button type="submit" className="button">
            <ImSearch />
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchName}
            onChange={this.InputHandler}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
