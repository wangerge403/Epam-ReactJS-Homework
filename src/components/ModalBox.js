import './styles/modalBox.css';
import React from "react";

const ModalBox = (props) => {
  const {isOpen, id, onConfirm, onCancel, title } = props;
  function confirm () {
    if (id) {
      // api action
      return;
    }
    onConfirm();
  }
  function cancel () {
    onCancel();
  }
  // props.isOpen
  return (
    <div className="modal-mask">
      <div className="modal-content-warp">
        <div className="title">{ title }</div>
        <div className="cancel-icon" onClick={cancel}><span>x</span></div>
      { props.children }
      <div className="btn-wrap">
        <button className="btn" onClick={confirm}>confirm</button>
        <button className="btn" onClick={cancel}>cancel</button>
      </div>
      </div>
    </div>
  )
}

export default ModalBox;