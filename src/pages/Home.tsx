import React, { useEffect, useState } from "react";
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
  

  const localbalance  = localStorage.getItem('Wallet Balance');
  const loadbalance : number|null = localbalance !== null? Number(localbalance) : null;
  const localexpense = localStorage.getItem("expenses");
const loadexpense : number|null = localexpense !== null? Number(localexpense) : null;


const [balance,setBalance] =useState(loadbalance ? loadbalance:5000);
const [expensesbalance,setExpensesbalance] =useState(loadexpense ? loadexpense:0);
const [transactionList,setTransactionList] = useState(() => {
const stored = localStorage.getItem("expenses");
  return stored ? JSON.parse(stored) : [];
});
const [chartData,setChartData] = useState([{name : "Food", price: 0},{name : "Entertainment", price: 0},{name : "Travel", price: 0}])



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
const handleAddBalance = (inputBal :number | null) => {
     console.log("Add Expense Button Clicked");
     const newBalance = balance + (inputBal== null ? 0: inputBal);
     setBalance(newBalance);
     localStorage.setItem('Wallet Balance', balance.toString());


  }
  const handleAddExpense =(title :string, price:number|null, category:string, date:string) => {

 


 


const newtransaction ={
  id:Date.now(),
  title:title,
  price:price,
  category:category,
  date:date
}
const updatedTransactions = [...transactionList, newtransaction];
  setTransactionList(updatedTransactions);
localStorage.setItem("expenses", JSON.stringify(updatedTransactions));
 if (price !== null) {
  

   setExpensesbalance(expensesbalance+price);

    ;
   setBalance(balance-price);

 }



  }

  useEffect(() => {
  if (balance !== null && expensesbalance !== null) {
    localStorage.setItem("Wallet Balance", balance.toString());
    localStorage.setItem("expensesbalance", expensesbalance.toString());
  }
}, [balance, expensesbalance]);




  
  const closeBalanceModal = () => {
    setisopenAddBalModal(false);
  };

  const closeExpenseModal = () => {
    setisopenAddExpenseModal(false);
  };

  return (
    <div className="main">
      <h1>Expense Tracker</h1>
      <div className="d-flex mt-2">
        <div className="flex-card d-flex">
          <div className="col-lg-4 ml-0">
            <Card message="Wallet Balance" balance ={balance} expense={expensesbalance} handleButtonClick={openAddExpenseModal} />
            <ModalAddBalance isOpen={isopenAddExpenseModal} handleAddBalance={handleAddBalance} onClose={closeExpenseModal} />
          </div>

          <div className="col-lg-4">
            <Card message="Expenses" balance ={balance} expense={expensesbalance} handleButtonClick={openAddbalanceModal} />
           
             <ModalEditAdd isOpen={isopenAddBalanceModal} handleAddExpense={handleAddExpense} onClose={closeBalanceModal} />
          </div>

          <div className="col-lg-4">
            <ExpenseChart data={chartData} />
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
