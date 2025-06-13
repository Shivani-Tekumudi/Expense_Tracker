import React, { useState } from "react";
import Card from "../components/Card";
import ExpenseChart from "../components/PieChart";
import ModalEditAdd from "../components/ModalAddEditExpense";
import ModalAddBalance from "../components/ModalAddBalance";
import TransactionCard from "../components/Transactions/TransactionCard";
import TopexpensesBarchart from "../components/BarChart";

export function Home() {
  const data = [
    { name: "Food", value: 400 },
    { name: "Entertainment", value: 300 },
    { name: "Travel", value: 300 },
  ];

  const [isopenAddExpenseModal, setisopenAddExpenseModal] = useState(false);
  const [isopenAddBalanceModal, setisopenAddBalModal] = useState(false);

  const openAddbalanceModal = () => {
    console.log("Add Balance Button Clicked");
    setisopenAddBalModal(true);
  };

  const openAddExpenseModal = () => {
    console.log("Add Expense Button Clicked");
    setisopenAddExpenseModal(true);
  };

  const closeBalanceModal = () => {
    setisopenAddBalModal(false);
  };

  const closeExpenseModal = () => {
    setisopenAddExpenseModal(false);
  };

  return (
    <div className="main">
      <h3>Expense Tracker</h3>
      <div className="d-flex mt-2">
        <div className="flex-card d-flex">
          <div className="col-lg-4 ml-0">
            <Card message="Wallet Balance" handleButtonClick={openAddExpenseModal} />
            <ModalAddBalance isOpen={isopenAddExpenseModal} onClose={closeExpenseModal} />
          </div>

          <div className="col-lg-4">
            <Card message="Expenses" handleButtonClick={openAddbalanceModal} />
           
             <ModalEditAdd isOpen={isopenAddBalanceModal} onClose={closeBalanceModal} />
          </div>

          <div className="col-lg-4">
            <ExpenseChart data={data} />
          </div>
        </div>
      </div>
     
      <div className="d-flex gap-10 mt-20">
        <div className="col">
             <h3><i>Recent Transactions</i></h3>
      <TransactionCard />
      </div>
      <div className="col">
        <h3><i>Top Expenses</i></h3>
     <div className="transaction-card">

        <div className="transaction-body" style={{fontSize:'9px'}}>
            <TopexpensesBarchart />
            </div>
            
        </div>
        
      </div>
      </div>
    
    </div>
  );
}
