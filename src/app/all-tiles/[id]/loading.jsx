import React from 'react';
import { PuffLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center my-50'>
            <PuffLoader color="#e09f2d" />
        </div>
    );
};

export default loading;