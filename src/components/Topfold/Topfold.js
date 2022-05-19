import React, { useState } from 'react';
import './TopFold.css';
import { FaSearch, FaPlusCircle, FaArrowLeft, FaMinusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Topfold = () => {

    const [query, setQuery] = useState('');


  return (
    <div className='topfold'>
        {
            window.location.pathname==='/' ? 
            (<div className='home-topfold'>
                <div className='searchbar'>
                    <FaSearch/>
                    <input value={query} placeholder='search' onChange={(e) => setQuery(e.target.value)}/>
                </div>
                <Link to='/add-expense'>
                    <div className='add-btn'>
                        <FaPlusCircle/>
                        <label>Add</label>
                    </div>
                </Link>
            </div>)
            :
            (<div className='add-topfold'>
                <Link to='/'>
                    <div className='add-topfold-btn'>
                        <FaArrowLeft/>
                        <label>Back</label>
                    </div>
                </Link>

                <Link to='/'>
                    <div className='add-topfold-btn'>
                        <FaMinusCircle/>
                        <label>Cancel</label>
                    </div>
                </Link>
            </div>)
        }
    </div>
  )
}

export default Topfold