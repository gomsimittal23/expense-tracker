import React from 'react';
import './Card.css';
import { FaTrash } from 'react-icons/fa';

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/actions/expenses';

const Card = ({item, notify}) => {

  const time = moment(item.createdAt).fromNow();

  const dispatch = useDispatch();

  // console.log(item);
  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notify();
  }

  return (
    <div className='card'>
      <div className='card-info'>
        <label className='title'>{item.title}</label>
        <label className='time'>{time}</label>
      </div>

      <div className='card-info'>
        {/* <button className='btn'>
          Delete
        </button> */}
        <FaTrash onClick={handleDelete}/>
        <label>Rs. {item.amount}</label>
      </div>

    </div>
  )
}

export default Card