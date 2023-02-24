import React from "react";

interface ModalProps {
  onCancel : React.MouseEventHandler<HTMLElement>;
  onConfirm : React.MouseEventHandler<HTMLElement>;
}

export default function Modal(props : ModalProps) {
  function cancelHandler() {
   // props.onCancel;
  }
  function confirmHandler() {
    return props.onConfirm;
  }

  return (
    <div className='modal'>
      <p>Are you sure?</p>
      {/* Chama a prop diretamente (função closeModalHandler) */}
      <button className='btn btn--alt' onClick={props.onCancel}>
        Cancel
      </button>
      {/* Chama a função que retorna a props (função closeModalHandler) */}
      <button className='btn' onClick={confirmHandler()}>
        Confirm
      </button>
    </div>
  );
}