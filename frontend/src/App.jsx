import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';

const router = createBrowserRouter([

  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  }

])

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center bg-violet-300'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
