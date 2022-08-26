import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Modal.module.css';
class Modal extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    onCloseModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    const { src, onCloseModal } = this.props;
    return (
      <div
        className={s.Overlay}
        onClick={e => {
          if (e.target === e.currentTarget) {
            onCloseModal();
          }
        }}
      >
        <img className={s.Modal} src={src} alt={'daw'} />
      </div>
    );
  }
}

export default Modal;
