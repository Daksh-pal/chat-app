import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeSocket , closeSocket } from '../src/redux/socket';

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
  const { authUser } = useSelector(store => store.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (authUser) {
  //     const socket = initializeSocket(authUser._id);

  //     socket.on('getOnlineUsers', (onlineUser) => {
  //       dispatch(setOnlineUser(onlineUser));
  //     });

  //   } else {
  //     closeSocket();
  //   }

  //   return () => {
  //     closeSocket();
  //   };
  // }, [authUser]);

  return (
    <div className='p-4 h-screen flex items-center justify-center bg-violet-300'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
