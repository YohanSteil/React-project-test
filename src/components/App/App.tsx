import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PublicRouter from '../../pages/Public/PublicRouter.tsx';
import AdminRouter from '../../pages/Admin/AdminRouter.tsx';
import AuthRouter from '../../pages/Auth/AuthRouter.tsx';




const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter/>} />
        <Route path="/admin/*" element={<AdminRouter />}/>
        <Route path="/auth/*" element={<AuthRouter />}/>
        </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
