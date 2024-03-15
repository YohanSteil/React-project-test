import React from 'react';
import { Outlet } from 'react-router-dom';

const layout = () => {
    return (
        <div className='ALayout'>
            Layout
            <Outlet/>
        </div>
    );
};

export default layout;