import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import ExpenseChart from "../components/PieChart";
import ModalEditAdd from "../components/ModalAddEditExpense";
import ModalAddBalance from "../components/ModalAddBalance";

import TopexpensesBarchart from "../components/BarChart";
import TransactionCard from "../components/Transactions/TransactionCard";

export function Home() {
  
  

  const localbalance  = localStorage.getItem('Wallet Balance');
  const loadbalance : number|null = localbalance !== null? Number(localbalance) : null;
  const localexpense = localStorage.getItem("expensesbalance");
const loadexpense : number|null = localexpense !== null? Number(localexpense) : null;

const defaultTransaction ={
 id: null,
  title: "",
  price: null,
  category: "Food",
  date: ""
}
const [balance,setBalance] =useState(loadbalance ? loadbalance:5000);
const [expensesbalance,setExpensesbalance] =useState(loadexpense ? loadexpense:0);
const [transactionList,setTransactionList] = useState(() => {
const stored = localStorage.getItem("expenses");
  return stored ? JSON.parse(stored) : [];
});
const [chartData,setChartData] = useState([{name : "Food", price: 0},{name : "Entertainment", price: 0},{name : "Travel", price: 0}]);
const [selectedTransaction,setSelectedTransaction] = useState({
 id: null,
  title: "",
  price: null,
  category: "",
  date: ""
});



  const [isopenAddBalanceModal, setisopenAddBalModal] = useState(false);
  const [isopenAddExpenseModal, setisopenAddExpenseModal] = useState(false);

  const openAddbalanceModal = () => {
    console.log("Add Balance Button Clicked");
    setisopenAddBalModal(true);
  };

  const openAddExpenseModal = () => {
    console.log("Add Expense Button Clicked");
    setSelectedTransaction(defaultTransaction);
    setisopenAddExpenseModal(true);
    
  };
const handleAddBalance = (inputBal :number | null) => {
     console.log("Add Expense Button Clicked");
     const newBalance = balance + (inputBal== null ? 0: inputBal);
     setBalance(newBalance);
     localStorage.setItem('Wallet Balance', balance.toString());


  }
  const handleAddExpense =(id:number|null,title :string, price:number|null, category:string, date:string) => {

const newtransaction ={
  id:id,
  title:title,
  price:price,
  category:category,
  date:date
}
//if id is present - in transaction list 
//then update only the  that row 
const edititem = transactionList.find((item: any) => item.id === id);
let updatedTransactions
if(edititem  ){
const oldprice = edititem.price;

 const updatedTransaction = 
 {...edititem, 
  title,
  price,
  category,
  date};

  updatedTransactions = transactionList.map((item: any) =>  item.id=== id ? updatedTransaction : item);
if (price !== null) {
   setExpensesbalance(expensesbalance-oldprice+price);
   setBalance(balance+oldprice-price);

 
}
}
else{ 
  updatedTransactions = [...transactionList, newtransaction];
   if (price !== null) {
   setExpensesbalance(expensesbalance+price);
   setBalance(balance-price);
  //  setChartData()
 }
}
  setTransactionList(updatedTransactions);
localStorage.setItem("expenses", JSON.stringify(updatedTransactions));
  }
  

const handleDelete =(id:number,price:number) => {
  const deletitem =transactionList.filter((item:any) => item.id !== id);

console.log("deletitem" , deletitem , "id" ,id);
setBalance(balance+price);
setExpensesbalance(expensesbalance-price);
setTransactionList(deletitem);
localStorage.setItem("expenses", JSON.stringify(deletitem));

}
const handleEdit =(id:number) => {
   const edititem =transactionList.filter((item:any) => item.id === id);
   if(edititem){
 setSelectedTransaction(edititem[0]);
  

    setisopenAddExpenseModal(true);

   }
  



}
  useEffect(() => {
  if (balance !== null && expensesbalance !== null) {
    localStorage.setItem("Wallet Balance", balance.toString());
    localStorage.setItem("expensesbalance", expensesbalance.toString());
  }
}, [balance, expensesbalance]);

useEffect(()=> {
  if(transactionList && transactionList.length > 0){
const result = chartData.map((ele) => {
  const total = transactionList.filter((t:any) => t.category === ele.name).reduce((acc:any,curr:any) => acc + curr.price,0);

  return {...ele, price:total}
})

setChartData(result)
  }
  


},[transactionList])




  
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
            <Card message="Wallet Balance" balance ={balance} expense={expensesbalance} handleButtonClick={openAddbalanceModal} />

            
            <ModalAddBalance isOpen={isopenAddBalanceModal} handleAddBalance={handleAddBalance} onClose={ closeBalanceModal}  />
          </div>

          <div className="col-lg-4">
            <Card message="Expenses" balance ={balance} expense={expensesbalance} handleButtonClick={openAddExpenseModal} />
           
             <ModalEditAdd isOpen={isopenAddExpenseModal} handleAddExpense={handleAddExpense} onClose={closeExpenseModal} transaction={selectedTransaction} />
          </div>

          <div className="col-lg-4">
            <ExpenseChart data={chartData} />
          </div>
        </div>
      </div>
     
      <div className="d-flex gap-10 mt-20">
        <div className="col">
             <h3><i>Recent Transactions</i></h3>
      <TransactionCard transactionList={transactionList} handleDelete ={handleDelete} handleEdit={handleEdit}/>

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
