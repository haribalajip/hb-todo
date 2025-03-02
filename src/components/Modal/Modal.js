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
  const trigger = React.Children.toArray(children).find((child) => {
    return child.type.name === "Trigger";
  }).props.children;

  const content = React.Children.toArray(children).find((child) => {
    return child.type.name === "Content";
  }).props.children;

	const [open, setOpen] = React.useState(false);
  
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Trigger children={trigger} setOpen={setOpen}/>
      <Dialog.Portal>
      <Dialog.Overlay className={styles.Overlay} />
      <Content children={content} setOpen={setOpen}/>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Modal.Trigger = Trigger;
Modal.Content = Content;
export default Modal;



