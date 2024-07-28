import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice';

const useGetRealtimeMessage = () => {
    const {socket} = useSelector(store => store.user);
    const {messages} = useSelector(store => store.message);
    const dispatch  = useDispatch();

    useEffect(()=>{
        socket?.on("newMessage" , (newMessage) => {
            dispatch(setMessages([...messages , newMessage]));
        });
    },[socket , setMessages , messages])
}

export default useGetRealtimeMessage;

