import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.tsx';
import ALayout from './ALayout.tsx';
import Error from '../../_utils/Error.tsx'

import {User, UEdit, Add} from '../../pages/Admin/User/index.tsx';
// import {Cocktail, CEdit} from '../../pages/Admin/Cocktail'

const AdminRouter = () => {
   return (
       <Routes>
           <Route element={<ALayout/>}>
               <Route path='dashboard' element={<Dashboard/>} />
               <Route path='user/*'>
                   <Route path='index' element={<User />} />
                   <Route path='edit' element={<UEdit/>} />
                   <Route path='add' element={<Add/>}  />
                   <Route path='*' element={<Error/>} />
               </Route>
               <Route path='*' element={<Error/>} />
           </Route>
       </Routes>
   );
};


export default AdminRouter;