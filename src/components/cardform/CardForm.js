// import React, { useState } from 'react';
// import './CardForm.css';
// import { GrLocation } from 'react-icons/gr';
// import Navbar from '../navbar/NavbarTemp'
// import { useNavigate } from 'react-router-dom';

// const CardForm = () => {
//     const [destination, setDestination] = useState('');
//     const [activity, setActivity] = useState('');
//     const [date, setDate] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted', { destination, activity, date });
//         navigate('/results');



//     };
// const navigate = useNavigate();
//     return (
//       <form className=" md:w-full lg:w-3/4 max-w-xlg flex flex-row justify-center flex-wrap -mx-3 mb-2">
//       <div className="w-full md:w-1/4 px-1 mb-6 md:mb-0">
//         <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 flex justify-start" for="grid-city">
//           Search for destination
//         </label>
//         <input required className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder=""/>
//       </div>
//       <div className="w-full md:w-1/4 px-1 mb-6 md:mb-0">
//         <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 flex justify-start" for="grid-state">
//           Select your activity
//         </label>
//         <div className="relative">
//           <select required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
//             <option value="">Please select an activity</option>
//             <option>Historical Tours</option>
//             <option>Relaxation Tours</option>
//             <option>Shopping Tours</option>
//             <option>Adventure Tours</option>
//           </select>
//           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
//             <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//           </div>
//         </div>
//       </div>
//       <div className="w-full md:w-1/4 px-1 mb-6 md:mb-0">
//         <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 flex justify-start" for="grid-date">
//           Select your date
//         </label>
//         <input required className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date" type="date" />
//       </div>
//       <div className="w-full md:w-1/4 px-1 mb-6 md:mb-0 flex items-end">
//         <button className="w-full bg-green-600 hover:bg-white hover:text-green-600 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     </form>
  
//     );
// };

// export default CardForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardForm = () => {
    const [destination, setDestination] = useState('');
    const [activity, setActivity] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', { destination, activity, date });
        
        // Navigate to the results page with state
        navigate('/results', {
            state: { destination, activity }
        });
    };

    return (
        <form className="md:w-full lg:w-3/4 max-w-xlg flex flex-row justify-center flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/4 px-1 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">
                    Search for destination
                </label>
                <input 
                    required 
                    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-city" 
                    type="text" 
                    placeholder="" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>
            <div className="w-full md:w-1/4 px-1 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-state">
                    Select your activity
                </label>
                <div className="relative">
                    <select 
                        required 
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-state"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                    >
                        <option value="">Please select an activity</option>
                        <option value="Historical Tours">Historical Tours</option>
                        <option value="Relaxation Tours">Relaxation Tours</option>
                        <option value="Shopping Tours">Shopping Tours</option>
                        <option value="Adventure Tours">Adventure Tours</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/4 px-1 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-date">
                    Select your date
                </label>
                <input 
                    required 
                    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-date" 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="w-full md:w-1/4 px-1 mb-6 md:mb-0 flex items-end">
                <button 
                    className="w-full bg-green-600 hover:bg-white hover:text-green-600 text-white font-bold py-2 px-4 rounded" 
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default CardForm;

