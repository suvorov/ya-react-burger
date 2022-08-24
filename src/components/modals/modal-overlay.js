import React from 'react';
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

export default ModalOverlay;