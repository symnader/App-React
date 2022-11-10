import React from 'react'

import './Modal.css'

import Wrapper from '../../../modules/hoc/wrapper'
import Backdrop from '../back-drop/back-drop'


const Modal = (props) => {
  return (
    <Wrapper>
      <Backdrop show={props.show} click={props.modalClose} />
      <div
        className="modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  )
}

export default Modal
