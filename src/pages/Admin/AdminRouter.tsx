import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.tsx';
import ALayout from './ALayout.tsx';

const AdminRouter = () => {
    return (
       <Routes>
         <Route element={<ALayout/>} >
            <Route path='/dashboard'element={<Dashboard/>} />
            <Route />
         </Route>
       </Routes>
    );
};

export default AdminRouter;