import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';
import Login from './Login';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { authUser } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, []);

  return ((
        <div className="flex rounded-xl overflow-hidden bg-violet-400 sm:h-[450px] md:h-[550px]">
          <Sidebar />
          <MessageContainer />
        </div>
  ))
};

export default HomePage;