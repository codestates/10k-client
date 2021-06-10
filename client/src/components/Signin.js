import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom"

const Signin = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accessToken, setAccessToken] = useState('')
    const history = useHistory()

    const handleLogin = () => {
        if(!email || !password) {
            return alert('아이디랑 비번 적어주세요')
        }
        return axios.post("https://10k/user/signin", {
            email: email,
            password: password,
            // 토큰추가필요
        })
        .then(props.handleResponseSuccess)
        .catch(() => {
            alert("로그인 실패")
        })
    }

    return (
        <div>
            <div>
                <input placeholder="id를 입력하슈" onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
            </div>
            <div>
                <input placeholder="비밀번호" onChange={(e) => {
                    setPassword(e.target.value)
                }} />
            </div>
            <div>
                <button onClick={handleLogin}>로그인</button>
            </div>
            <div>
                <button onClick={() => {history.push('/user/signup')}}>아이디가 없으십니까? 회원가입하십셔</button>
            </div>
        </div>
    );
};

export default Signin;