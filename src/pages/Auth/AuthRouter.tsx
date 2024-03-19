import React from 'react';
import Login from './Login.tsx';
import Error from '../../_utils/Error.tsx'
import { Route, Routes } from 'react-router-dom';
import './Auth.scss'

const AuthRouter = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Login />} />
                <Route path="login" element={<Login/>} />
                <Route path='*' element={<Error/>}/>
            </Routes>
        </div>
    );
};

export default AuthRouter;