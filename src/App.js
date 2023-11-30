import { Route, Routes } from 'react-router-dom/dist';
import './App.css';
import AdminRouters from './Routers/AdminRouters';
import CustomerRoutes from './Routers/CustomerRouters';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomerRoutes/>}></Route>
        <Route path='/admin/*' element={<AdminRouters></AdminRouters>}></Route>
      </Routes>

    </div>
  );
}

export default App;
