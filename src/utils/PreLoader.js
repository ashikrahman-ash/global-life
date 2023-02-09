import React from 'react';
import Preloader from '../assets/gif/preloader.gif';

const PreLoader = () => {
  return (
      <div className='d-flex justify-content-center align-items-center vh-100'>
          <img src={Preloader} alt='loader' />
      </div>
  );
};

export default PreLoader;