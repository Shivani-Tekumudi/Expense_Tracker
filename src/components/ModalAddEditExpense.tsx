import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import {  useSnackbar } from 'notistack'
Modal.setAppElement("#root");

type ModalEditAddProps = {
  isOpen: boolean;
  handleAddExpense : (id:number|null,title :string, price:number|null, category:string, date:string) => void
  onClose: () => void;
  transaction : {
    id:number|null,
    title :string, 
  price:number|null,
   category:string, 
   date:string
}
};
export default function ModalEditAdd({ isOpen, handleAddExpense, onClose , transaction }: ModalEditAddProps) {
  const [id,setId] =useState<number | null>(transaction.id)
  const [title,setTitle] =useState(transaction.title);
  const [price,setPrice] =useState<number | null>(transaction.price);
  const [category,setCategory] =useState(transaction.category);
  const [date, setDate] = useState(transaction.date);
 
   const { enqueueSnackbar, closeSnackbar } = useSnackbar()

const handleAddbtn = (e: React.SyntheticEvent) => {
  e.preventDefault();
  const localbalance  = localStorage.getItem('Wallet Balance');
  if(price !== null){
    if(price > Number(localbalance)){
enqueueSnackbar("expense is more than balance", { variant: 'warning' })
    }
    else{ 
 console.log("entered else");
 const newId = transaction.id === null ? Date.now() : transaction.id;
  handleAddExpense(newId,title,price,category,date);
  onClose();
  setTitle('')
setPrice(0);
setCategory('');
setDate('')
 }
  }
}
useEffect(() => {
  // When transaction changes, update the form
  setTitle(transaction.title || "");
  setPrice(transaction.price ?? null);
  setCategory(transaction.category || "");
  setDate(transaction.date || "");
}, [transaction]);
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
      <h2>Add Expenses</h2>
      <form onSubmit={handleAddbtn}>
      <div className="row">
        <div className="col mt-2">
        <input type="text" value={title} name="title" className="form-input" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required/>
        
        
        </div>
        <div className="col mt-2">
        <input type="number" min="1" value={Number(price)} className="form-input" name="price" placeholder="Price" onChange={(e) => {setPrice(Number(e.target.value))}} required/></div>
      </div>
      <div className="row ">
         <div className="col mt-2">
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Food" selected>Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Travel">Travel</option>
        </select></div>
         <div className="col mt-2">
        <input type="date" name="date" className="form-input" placeholder="Title" value={date} onChange={(e) =>{setDate(e.target.value)}} required  /></div>
      </div>
       <div className="row">
         <div className="col text-center mt-2">
          <button className="card-button form-btn" type="submit" >Add Expenses</button>
                    <button className= " card-button cancel-btn" onClick={onClose}>Close Modal</button>

          </div>
          
         </div>
      </form>
    </Modal>
  );
}
