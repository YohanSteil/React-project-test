import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../_utils/Error.tsx';

import { Layout, Home, Service, Contact } from './index.tsx';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>

                <Route index element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/service" element={<Service/>} />
                <Route path="/contact" element={<Contact/>} />
            <Route path='*' element={<Error/>} />
            </Route>
     </Routes>
    );
};

export default PublicRouter;