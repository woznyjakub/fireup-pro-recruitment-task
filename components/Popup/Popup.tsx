import Modal from 'react-modal';
import styles from './Popup.module.scss';

Modal.setAppElement('#__next');

export interface PopupProps {
  isActive: boolean;
  closePopupCallback?: () => void;
}

export const Popup: React.FC<PopupProps> = ({ children, isActive, closePopupCallback }) => {
  return (
    <Modal isOpen={isActive} className={styles.popup}>
      <button onClick={closePopupCallback}>close</button>
      <div>{children}</div>
    </Modal>
  );
};
