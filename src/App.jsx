import './App.css';
import { RouterProvider } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import ocultarMenu from './ocultarMenu'
import AuthProvider from "./context/AuthContext.tsx";
import Routes from "./router/routes.tsx";



function App() {
  
  
  return (
    <AuthProvider>
      <RouterProvider router={Routes} />
      <ToastContainer />
    </AuthProvider>
    );
  }
  
  setInterval(()=>{
    ocultarMenu()
  }, 1000)


  export default App;
  