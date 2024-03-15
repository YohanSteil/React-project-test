import React from 'react';
import './App.scss';
import { BrowserRouter} from 'react-router-dom';
import PublicRoute from '../Public/PublicRouter.tsx';



const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
        <PublicRoute/>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
