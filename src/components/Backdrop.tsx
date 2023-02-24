import React from "react";

interface BackdropProps {
  onClick : React.MouseEventHandler<HTMLElement>;
}

export default function Backdrop(props : BackdropProps) {
  return (
    <div className='backdrop' onClick={props.onClick}/>
  );
}