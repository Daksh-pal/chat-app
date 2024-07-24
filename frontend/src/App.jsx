import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUser } from "./redux/userSlice";

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


  const {authUser} = useSelector(store => store.user);
  const {socket} = useSelector(store => store.user);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(authUser){
      const socketio = io('http://localhost:5173', {
        query:{
          userId:authUser._id
        }
      });
      dispatch(setSocket(socketio));

      socketio?.on('getOnlineUsers', (onlineUser) => {
        dispatch(setOnlineUser(onlineUser))
      })
    }
    else{
      if(socket){
        socket.close();
        dispatch(setSocket(null));
      }
    }
  },[authUser])

  return (
    <div className='p-4 h-screen flex items-center justify-center bg-violet-300'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
