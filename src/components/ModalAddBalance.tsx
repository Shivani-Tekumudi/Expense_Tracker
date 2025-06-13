import React, { useState } from "react";
import Modal from 'react-modal';
Modal.setAppElement("#root");

type ModalEditAddProps = {
  isOpen: boolean;
  onClose: () => void;
};



export default function ModalAddBalance({ isOpen, onClose }: ModalEditAddProps) {
  return (
    <Modal 
    style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit/Add Modal"
    >
      <h2>Add Balance</h2>
      <div className="row">
        <div className="col mt-2">
        <input type="text" className="form-input" placeholder="Income Amount" />
        </div>
        <div className="col mt-2">
        <button className="card-button form-btn" onClick={onClose}>Add Expenses</button></div>
        <div className="col mt-2">
        <button className= " card-button cancel-btn" onClick={onClose}>Close Modal</button></div>
      </div>
     
    
      
    </Modal>
  );
}
