import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

const ModalOverlay = ({
  onClose,
}) => {
  const onClick = React.useCallback((e) => {
    onClose();
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClick}></div>
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;