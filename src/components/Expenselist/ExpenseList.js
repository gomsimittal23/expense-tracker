import React from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card';
import './ExpenseList.css';

const ExpenseList = () => {

    const { expenseList : list} = useSelector(state => state.expenses);

    // console.log(expenses);
    const notify = () => toast("Expense deleted successfully😊");
    
  return (
    <div className='expenselist'>
        <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
        />
        {
            list.length ? (
                list.map((item) => <Card item={item} notify={notify} key={item.createdAt}/>)
            ) : (
                <div>
                    Empty list
                </div>
            )
        }
    </div>
  )
}

export default ExpenseList