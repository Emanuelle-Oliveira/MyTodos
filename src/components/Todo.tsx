import React from "react";

interface TodoProps {
  text: string;
}

export default function Todo( props : TodoProps) {

  function deleteHandler() {
      console.log('clicado');
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
    </div>
  );
}