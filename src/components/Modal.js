import React from "react";

const Modal = (props) => {
    const {
        children,
        showhide = false
    } = props;

    const style = Object.freeze({
            display: showhide ? 'flex' : 'none'
    });
    if(showhide){
        document.body.style.overflow = 'hidden';
    }else {
        document.body.style.overflow = 'hidden';
    }
  return (
    <div className="modal" style={style}>
      <div className="content">{children}</div>
    </div>
  );
};

export default Modal;
