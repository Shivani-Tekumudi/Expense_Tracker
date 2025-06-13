import { CiRollingSuitcase,CiGift,CiPizza,CiCircleRemove,CiEdit  } from "react-icons/ci";


export default function TransactionRow(){
    return(
        <>
        <span className="d-lg-flex d-block align-items-center flex-row justify-content-between ">
            <div className="d-flex align-items-center flex-row">
            <span className="circle-bg-icon"><CiRollingSuitcase /></span>
            <div>
                <p className="m-0">title</p>
                <span className="text-secondary">March 20,2024</span>
            </div>
            </div>
            <div className="d-flex align-items-center flex-row justify-content-between  gap-10">
            <span className="money-font">$150</span>
             <span className="tran-cancel-btn"><CiCircleRemove /></span>
            <span className="tran-edit-btn"><CiEdit /></span>
           </div>
          
        </span>
        <hr />
        </>
    )
}