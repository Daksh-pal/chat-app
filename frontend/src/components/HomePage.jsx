import React from 'react';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';
import Login from './Login';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { authUser } = useSelector((store) => store.user);

  return (
    <>
      {authUser ? (
        <div className="flex rounded-xl overflow-hidden bg-violet-400 sm:h-[450px] md:h-[550px]">
          <Sidebar />
          <MessageContainer />
        </div>
      ) : (
        <Login />
      )}
    </>

  );
};

export default HomePage;