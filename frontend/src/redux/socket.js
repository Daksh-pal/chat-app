
import io from 'socket.io-client';

let socket;

export const initializeSocket = (userId) => {
  if (socket) {
    console.warn('Socket already initialized');
    return socket;
  }

  socket = io('http://localhost:5173', {
    query: { userId },
  });

  socket.on('connect', () => {
    console.log('Socket connected');
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });

  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });

  return socket;
};

export const getSocket = () => socket;

export const closeSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
};