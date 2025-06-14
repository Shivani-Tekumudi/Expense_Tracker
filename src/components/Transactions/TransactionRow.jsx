import { CiRollingSuitcase,CiGift,CiPizza,CiCircleRemove,CiEdit  } from "react-icons/ci";


export default function TransactionRow({id,category,title,date,price, handleDelete, handleEdit}){
    

    return(
        <>
        <span className="d-lg-flex d-block align-items-center flex-row justify-content-between ">
            <div className="d-flex align-items-center flex-row justify-content-start-sm">
            <span className="circle-bg-icon">
               {(category === "Food") ? <CiPizza />: ''}
               {(category === "Entertainment") ? <CiGift />: ''}
               {(category === "Travel") ? <CiRollingSuitcase />: ''}
                </span>
            <div>
                <p className="m-0">{title}</p>
                <span className="text-secondary">{date}</span>
            </div>
            </div>
            <div className="d-flex align-items-center flex-row justify-content-between  gap-10">
            <span className="money-font">₹{price}</span>
            <div>
             <button className="tran-cancel-btn mr-10" onClick={() => handleDelete(id,price)}><CiCircleRemove /></button>
            <button className="tran-edit-btn" onClick={() =>handleEdit(id)}><CiEdit /></button>
           </div></div>
          
        </span>
        <hr />
        </>
    )
}