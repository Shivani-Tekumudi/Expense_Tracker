import { useState } from "react";

/* use `interface` if exporting so that consumers can extend */
 interface MyComponentProps {
     message: string;
    handleButtonClick : () => void
    
   } 

export default function Card({ message, handleButtonClick }: MyComponentProps){
  const [modalIsOpen, setModalIsOpen] = useState(false);


return (
    <div className="card">
        <div className="card-body">
            <span>{message}: <span className={message==="Expenses"? "expense-font": "balance-font"}> ₹5000</span></span>
            <div className="textCenter">
                
               

                {message==="Expenses"?  <button type="button" onClick={handleButtonClick} className="card-button btn-expense">+Add Expenses</button> : <button onClick={handleButtonClick}  type="button" className="card-button btn-balance">+Add Income</button>}
              
            </div>
        </div>

    </div>
)

}


