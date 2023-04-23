import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
<Router>
<Routes>
<Route path='/' element={< NavBar/> } />
     <Route path='/login' element={< Login/> } />
     <Route path='/signup' element={< Signup /> } />
     <Route path='/forgotpassword' element={< ForgotPassword /> } />

  
     </Routes>
</Router>
    </div>
  )}
export default App
