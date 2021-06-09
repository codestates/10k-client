import './App.css';
import Signin from './components/Signin';
import React, { useState } from 'react'
import { Route, useHistory, Redirect } from "react-router-dom"
import axios from 'axios'
import Mypage from './components/Mypage';
import SignUp from './components/SignUp';


// 클래스명은 아직 넣지말기. 협의 후 넣기.

function App() {
  const [login, setLogin] = useState(false)
  const [userInfo, setUserInfo] = useState('')
  const history = useHistory()
  
  const isAuthenticated = () => {
    axios.get("https://10k/user/:id")
    .then((res) => {
      setLogin(true)
      setUserInfo(res) //서버쪽 요청해서 가져온 데이터 변경
      history.push('/') // 마이페이지 쪽
    })
    .catch((err) => {
      if(err.response.status === 401) {
        setLogin(false)
        history.push('/signin')
      }
    })
  }
  const handleResponseSuccess = () => {
    isAuthenticated()
  }

  return (
    <div className="App">
      <Route path='/user/signin'
        render={() => (
          <Signin login={login} handleResponseSuccess={handleResponseSuccess}/>
        )} />
         <Route path='/user/signup'
        render={() => (
          <SignUp />
        )} />
        <Route
            path='/'
            render={() => {
              if (login) {
                return <Redirect to='/user/signup' />;
              }
              return <Redirect to='/user/signin' />;
            }}
          />
    </div>
  );
}

export default App;
