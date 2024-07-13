import React, { useEffect } from 'react'
import axios from 'axios'

function useGetOtherUsers() {
    useEffect(()=>{
        const fetchOtherUsers = async()=>{
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8080/api/user/`);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }

        fetchOtherUsers();
    },[])
}

export default useGetOtherUsers