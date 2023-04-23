import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ForgotPassword from './Components/ForgotPassword';
import { ToastContainer, toast } from 'react-toastify';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <NavBar />

<Router>
<Routes>
     <Route path='/login' element={< Login/> } />
     <Route path='/signup' element={< Signup /> } />
     <Route path='/forgotpassword' element={< ForgotPassword /> } />

  
     </Routes>
</Router>
    </div>
  )}
export default App
