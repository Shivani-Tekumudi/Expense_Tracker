

/* use `interface` if exporting so that consumers can extend */
 interface MyComponentProps {
     message: string;
     balance :number;
     expense: number;
    handleButtonClick : () => void
    
   } 

export default function Card({ message,balance,expense, handleButtonClick }: MyComponentProps){


return (
    <div className="card">
        <div className="card-body">
{message==="Expenses"? <span>{message}<span className= "expense-font"> ₹{expense}</span></span>: <span>{message}<span className= "balance-font"> ₹{balance}</span></span>}

            
            <div className="textCenter">
                
               

                {message==="Expenses"?  <button type="button" onClick={handleButtonClick} className="card-button btn-expense">+ Add Expenses</button> : <button onClick={handleButtonClick}  type="button" className="card-button btn-balance">+ Add Income</button>}
              
            </div>
        </div>

    </div>
)

}


