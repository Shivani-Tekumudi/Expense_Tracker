import TransactionRow from "./TransactionRow";
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";

export default function TransactionCard(){
    return(
        <div className="transaction-card">
        <div className="transaction-body">
            <ul>
                <li>
                    <TransactionRow />
                </li>
            </ul>
            <div className="d-flex justify-content-center gap-5 flex-row">
        <div className="pagination-btn"><FiArrowLeft /> </div>
        <div className="pagination-number"> <span>1</span> </div>
        <div className="pagination-btn"><FiArrowRight /> </div>
            </div>
        </div>
        </div>
    )
}