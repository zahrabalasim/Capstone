import React, { useState } from 'react';
import './CardForm.css';
import { GrLocation } from 'react-icons/gr';
import Navbar from '../navbar/NavbarTemp'

const CardForm = () => {
    const [destination, setDestination] = useState('');
    const [activity, setActivity] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', { destination, activity, date });
    };

    return (

        <form className="w-full max-w-lg  ">
        <div className="flex flex-wrap -mx-3 mb-6">
         
        
        </div>
        
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              City
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              State
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Zip
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
          </div>
          <button >
            Text
        </button>
        </div>


      
      </form>
      
        
        // <div classNameName=''>
        //     <form onSubmit={handleSubmit} classNameName='card'>
        //         <div classNameName='formGroup'>
        //             <label htmlFor='city'>Search your destination:</label>
        //             <div classNameName='input'>
        //                 <input 
        //                     type='text' 
        //                     id='city' 
        //                     placeholder='Enter name here...'
        //                     value={destination}
        //                     onChange={(e) => setDestination(e.target.value)}
        //                 />
        //                 <GrLocation classNameName='icon' />
        //             </div>
        //         </div>
        //         <div classNameName='formGroup'>
        //             <label htmlFor='activity'>Select your activity:</label>
        //             <div classNameName='input'>
        //                 <select 
        //                     id='activity' 
        //                     value={activity}
        //                     onChange={(e) => setActivity(e.target.value)}
        //                 >
        //                     <option value=''>Select an activity</option>
        //                     <option value='SEA'>SEA</option>
        //                     <option value='Historical places'>Historical places</option>
        //                     <option value='Entertainment'>Entertainment</option>
        //                     <option value='Adventure'>Adventure</option>
        //                 </select>
        //             </div>
        //         </div>
        //         <div classNameName='formGroup'>
        //             <label htmlFor='date'>Select your date:</label>
        //             <div classNameName='input'>
        //                 <input 
        //                     type='date' 
        //                     id='date' 
        //                     placeholder='Enter date here...'
        //                     value={date}
        //                     onChange={(e) => setDate(e.target.value)}
        //                 />
        //             </div>
        //         </div>
        //         <button type='submit' classNameName='h-10 flex justify-items-center'>Search</button>
        //     </form>
 
        // </div>
    );
};

export default CardForm;
