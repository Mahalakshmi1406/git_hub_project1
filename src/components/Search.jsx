import React, { useEffect, useState } from 'react';

function Search({ setData, setIsLoading }) {
  const [user, setUser] = useState('Yash');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetches the data when the component first mounts
  useEffect(() => {
    handleClick(); // Call handleClick on mount
  }, []);

  return (
    <div className='flex gap-3 p-3 rounded-md shadow-lg bg-dark-grey'>
      <div className='flex items-center gap-3'>
        <span>
          <svg
            className='text-dark-blue'
            viewBox='0 0 788.5 1000'
            fill='currentColor'
            height='2em'
            width='2em'
          >
            <path d='M772 772c20 22.667 22 43.333 6 62l-46 46c-24 21.333-46.667 21.333-68 0L474 690c-49.333 28-101.333 42-156 42-85.333 0-159.667-31.667-223-95S0 499.333 0 414s30-158.333 90-219 132.667-91 218-91 160 31.667 224 95 96 137.667 96 223c0 58.667-15.333 112.667-46 162l190 188M94 414c0 58.667 22.667 110.667 68 156s97.333 68 156 68 109-21 151-63 63-93 63-153c0-58.667-22.667-110.333-68-155s-97.333-67-156-67-109 21-151 63-63 92.333-63 151' />
          </svg>
        </span>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className='text-white bg-transparent outline-none'
          type='text'
          name=''
          id=''
        />
      </div>
      <div>
        <button onClick={handleClick} className='px-3 py-2 text-white rounded-lg shadow-md bg-dark-blue'>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
