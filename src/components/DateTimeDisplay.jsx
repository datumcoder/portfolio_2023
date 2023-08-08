import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const options = { year: 'numeric',};
  const formattedDateTime = currentDateTime.toLocaleString(undefined, options);

  return (
    <div>
    
      <p className='pb-10 text-center font-bold text-[#001b5e]'>DATUMCODER <span>&copy;</span> {formattedDateTime}</p>

    </div>
  );
};

export default DateTimeDisplay;
