import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PublicRouter from '../../pages/Public/PublicRouter.tsx';
import AdminRouter from '../../pages/Admin/AdminRouter.tsx';




const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter/>} />
         <Route path="/admin/*" element={<AdminRouter />}/>
        </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
