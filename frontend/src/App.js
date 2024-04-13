import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Employees from './components/Employees.jsx';
import Main from './components/Main.jsx';
import AddEmployee from './components/AddEmployee.jsx';
import UpdateEmployee from './components/UpdateEmployee.jsx';
import Loginuser from './components/Loginuser.jsx';
import ViewEmployees from './components/Viewemployees.jsx';
import PrivateRoutes from './components/PrivateRoutes.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Loginuser />} />
        <Route path={'/loginadmin'} element={<Login/>} />
        <Route path={'/sign'} element={<Signup />} />
        <Route path={'/viewemployees'} element={<Main child={<ViewEmployees />} />} />
        <Route element={<PrivateRoutes />}>
        <Route path={'/employees'} element={<Main child={<Employees />} />} />
        <Route path={'/add'} element={<Main child={<AddEmployee />} />} />
        <Route path={'/employees/:id'} element={<Main child={<UpdateEmployee />} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
