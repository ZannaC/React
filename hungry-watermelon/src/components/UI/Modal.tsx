import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

interface BackdropProps {
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

interface ModalOverlayProps {
  children: ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement as Element)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement as Element
      )}
    </React.Fragment>
  );
};

export default Modal;