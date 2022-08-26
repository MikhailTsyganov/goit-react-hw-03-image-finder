import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = { searchName: '' };

  InputHandler = e => {
    this.setState({ searchName: e.target.value.toLowerCase() });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    if (this.state.searchName.trim() === '') {
      toast.error('Введите то, что хотите найти');
      return;
    }

    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    const { searchName } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmitHandler}>
          <button type="submit" className={s.SearchFormButton}>
            <ImSearch />
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
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
