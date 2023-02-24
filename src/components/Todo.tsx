import React, {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

interface TodoProps {
  text: string;
}

export default function Todo( props : TodoProps) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className='card'>
      <h2> {props.text} </h2>
      <div className='actions'>
        <button
          className='btn'
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
      { modalIsOpen && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler}/> }
      { modalIsOpen && <Backdrop onClick={closeModalHandler} /> }
    </div>
  );
}