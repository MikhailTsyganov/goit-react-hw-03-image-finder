import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

class ShowMoreButton extends Component {
  static propTypes = {
    onClickShowMore: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={s.Wrapper}>
        <button
          className={s.Button}
          type="button"
          onClick={this.props.onClickShowMore}
        >
          Load more
        </button>
      </div>
    );
  }
}

export default ShowMoreButton;
