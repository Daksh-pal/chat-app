import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setMessages } from "../redux/messageSlice";

function useGetMessages() {
    const { selectedUser } = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                if (selectedUser?._id) {
                    const res = await axios.get(`http://localhost:8080/api/message/${selectedUser._id}`);
                    dispatch(setMessages(res.data));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchMessages();
    }, [selectedUser, dispatch]);
}

export default useGetMessages;
