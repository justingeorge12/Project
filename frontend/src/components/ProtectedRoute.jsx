



import React, { useEffect, useState } from "react";
import {Navigate} from 'react-router-dom'
import {jwtDecode} from  'jwt-decode'
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";


function ProtectedRoute({ children }) {
    const [isAuthorized, setAuthorized] = useState(null);
  
    useEffect(() => {

      auth().catch(() => setAuthorized(false))


    //   const loggedOut = localStorage.getItem('loggedOut');
    //   if (loggedOut) {
    //     setAuthorized(false);
    //   } else {
    //     auth().catch(() => setAuthorized(false));
    //   }
    }, []);
  
    const refreshToken = async () => {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  
      try {
        const res = await api.post('/api/token/refresh/', {
          refresh: refreshToken,
        });
        if (res.status === 200) {
          localStorage.setItem(ACCESS_TOKEN, res.data.access);
          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
      } catch (error) {
        console.log(error);
        setAuthorized(false);
      }
    };
  
    const auth = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN);
      if (!token) {
        setAuthorized(false);
        return;
      }
      const decoded = jwtDecode(token);
      const tokenExpiration = decoded.exp;
      console.log(tokenExpiration)
      const now = Date.now() / 1000;
      console.log(now)
  
      if (tokenExpiration < now) {
        await refreshToken();
      } else {
        setAuthorized(true);
      }
    };
  
    if (isAuthorized === null) {
      return <div>Loading...</div>;
    }
  
    return isAuthorized ? children : <Navigate to='/login' />;
  }
  


export default ProtectedRoute










