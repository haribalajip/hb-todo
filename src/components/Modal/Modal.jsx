import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styles from "./Modal.module.css";
import ModalContext from '../../contexts/ModalContext';

const Trigger = ({ children, setOpen }) => {
  return (
    // <Dialog.Trigger> is a button, children could be again a button. So button inside a button will break styles.
    // So we are using a div here. 
    <div onClick={() => setOpen(true)}>
      {children}
    </div>
  )
};

const Content = ({ children, setOpen }) => {
  return (
    <Dialog.Content className={styles.Content + ' radix-themes'}>
      <Dialog.Title className={styles.Title}>Edit task</Dialog.Title>
      <ModalContext.Provider value={{ setOpen }}>
        {children}
      </ModalContext.Provider>
      
    </Dialog.Content>
  )
}

function Modal({ children }) {
  const trigger = React.Children.toArray(children)[0].props.children;

  const content = React.Children.toArray(children)[1].props.children;

	const [open, setOpen] = React.useState(false);

  // Radix styles break when the Dialog.Portal container is under App container.
  const AppContainer = document.getElementsByClassName('App')[0];
  
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Trigger children={trigger} setOpen={setOpen}/>
      <Dialog.Portal container={AppContainer}>
        <Dialog.Overlay className={styles.Overlay} />
        <Content children={content} setOpen={setOpen}/>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Modal.Trigger = Trigger;
Modal.Content = Content;
export default Modal;



