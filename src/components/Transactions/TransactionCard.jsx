import { useState } from "react";
import TransactionRow from "./TransactionRow";
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";


export default function TransactionCard({transactionList,handleDelete, handleEdit}){
    const [currentPage, setCurrentPage] =useState(1);
    const itemsperpage =3;
     const totalpages = Math.ceil(transactionList.length/itemsperpage);
    const startitem =(currentPage -1) * itemsperpage;
    const enditem = startitem +itemsperpage;
    const currentitems = transactionList.slice(startitem,enditem);
        
    
    const prevPage = () => {
        if(currentPage > 1)
        setCurrentPage(currentPage - 1);
    }
     const nextPage = () => {
        if(currentPage < totalpages)
        setCurrentPage(currentPage + 1);
    }
    return(
        <div className="transaction-card">
        <div className="transaction-body">
            {totalpages ?  <ul>
                {currentitems.map((ele) => <li key={ele.id}>
                    <TransactionRow id={ele.id} category={ele.category} title={ele.title} date={ele.date} price ={ele.price} handleDelete ={handleDelete} handleEdit={handleEdit}/>
                </li>)}
                
            </ul> : <h4 className="text-black"> No transactions yet</h4> }
           
            {transactionList.length>3? 
            <div className="d-flex justify-content-center gap-5 flex-row">
        <div className="pagination-btn" onClick={prevPage} disabled ={(currentPage===1)}><FiArrowLeft /> </div>
        <div className="pagination-number" > <span>{currentPage}</span> </div>
        <div className="pagination-btn" onClick={nextPage}><FiArrowRight /> </div>
            </div>:
            ''}

            
        </div>
        </div>
    )
}