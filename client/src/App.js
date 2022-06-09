import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Components/Login/Login';
import Entries from './Components/Entries/Entries/Entries';

function App() {
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem('tokenStore');
      if (token) {
        // Axios makes a GET request to “get” data from a server API
        // In second Parameter, we are setting the Authorization Header (HTTP Request Header)
        // As Authorization header is set up, after making a get request to verify route...
        // ...It will check if there is token available in Authorization header and send response as...
        // ...True or false which will be in ***response.data***
        const verified = await axios.get('/users/verify', {
          headers: { Authorization: token },
        });
        console.log(verified);
        setisLogin(verified.data);
        if (verified.data === false) return localStorage.clear();
      } else {
        setisLogin(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <div className="App">
      {/* if User is loggedin we will render entries page  */}
      {isLogin ? (
        <Entries setisLogin={setisLogin} />
      ) : (
        <Login setisLogin={setisLogin} />
      )}
    </div>
  );
}

export default App;
