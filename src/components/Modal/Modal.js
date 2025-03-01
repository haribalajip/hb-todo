import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import styles from "./Modal.module.css";

const Trigger = ({ children }) => {
  return {children}
};

const Content = ({ children }) => {
  return {children}
}

function Modal({ children }) {
  console.log(React.Children.toArray(children));
  const trigger = React.Children.toArray(children).find((child) => {
    return child.type.name === "Trigger";
  }).props.children;

  const content = React.Children.toArray(children).find((child) => {
    return child.type.name === "Content";
  }).props.children;

  
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />
        <Dialog.Content className={styles.Content + ' radix-themes'}>
          <Dialog.Title className={styles.Title}>Edit task</Dialog.Title>
          {content}
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className={`${styles.Button} green`}>Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className={styles.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Modal.Trigger = Trigger;
Modal.Content = Content;
export default Modal;



