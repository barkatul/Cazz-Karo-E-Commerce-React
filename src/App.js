import { Route, Routes } from 'react-router-dom/dist';
import './App.css';
import CustomerRoutes from './Routers/CustomerRouters';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomerRoutes/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
