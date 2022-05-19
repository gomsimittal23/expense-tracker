import React, { useState } from 'react';
import './AddForm.css';
import { FaArrowRight } from 'react-icons/fa';
import {useDispatch} from 'react-redux';
import { addExpense } from '../../redux/actions/expenses';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddForm = () => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState("");
    // const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);
        if(isNaN(val))
        {
            setAmount("");
            return;
        }
        setAmount(val);
    };

    const handleSubmit = () => {
        if(title==='' || amount==='')
        {
            const notify1 = () => toast("Please enter valid data !!");
            notify1();
            return;
        }
        const data = {
            title,
            amount, 
            createdAt : new Date(),
        };
        dispatch(addExpense(data));
        const notify = () => toast("Expense added successfully😊");
        notify();
        setTimeout(() => navigate("/"), 2000);
    }

  return (
    <div className='addform'>
        <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
        />
        <div className='form-item'>
            <label>Title : </label>
            <input value={title} placeholder='Enter title'  onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='form-item'>
            <label>Amount : </label>
            <input value={amount} placeholder='Enter amount'  onChange={(e) => handleAmount(e)}/>
        </div>
        <div className='form-add-btn' >
            <button onClick={handleSubmit}>
                <label>Add</label>
                <FaArrowRight/>
            </button>
        </div>
    </div>
  )
}

export default AddForm