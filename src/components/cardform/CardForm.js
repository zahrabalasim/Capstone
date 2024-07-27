import React, { useState } from 'react';
import './CardForm.css';
import { GrLocation } from 'react-icons/gr';

const CardForm = () => {
    const [destination, setDestination] = useState('');
    const [activity, setActivity] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', { destination, activity, date });
    };

    return (
        <div className='card'>
            <form onSubmit={handleSubmit} className='cardForm'>
                <div className='formGroup'>
                    <label htmlFor='city'>Search your destination:</label>
                    <div className='input'>
                        <input 
                            type='text' 
                            id='city' 
                            placeholder='Enter name here...'
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                        <GrLocation className='icon' />
                    </div>
                </div>
                <div className='formGroup'>
                    <label htmlFor='activity'>Select your activity:</label>
                    <div className='input'>
                        <select 
                            id='activity' 
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)}
                        >
                            <option value=''>Select an activity</option>
                            <option value='SEA'>SEA</option>
                            <option value='Historical places'>Historical places</option>
                            <option value='Entertainment'>Entertainment</option>
                            <option value='Adventure'>Adventure</option>
                        </select>
                    </div>
                </div>
                <div className='formGroup'>
                    <label htmlFor='date'>Select your date:</label>
                    <div className='input'>
                        <input 
                            type='date' 
                            id='date' 
                            placeholder='Enter date here...'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>
                <button type='submit'>Search</button>
            </form>
        </div>
    );
};

export default CardForm;
