import React from 'react';
import loading from '../../src/loading.gif';
const Spinner = () => {
    return <div className='text-center'>
        <img src={loading} alt="" prop="" style={{ width: '80px', height: '80px' }} />
    </div>;
}

export default Spinner;
