import React from 'react';
import styles from './PolicyModal.module.css';

const PolicyModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.modalTitle}>{title}</h2>
        <div className={styles.modalBody}>{content}</div>
      </div>
    </div>
  );
};

export default PolicyModal;
