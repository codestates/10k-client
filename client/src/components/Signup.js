import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const SignUp = (props) => {
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')  
    const [passwordCheck, setPasswordCheck] = useState('')  
    const history = useHistory()

    // useEffect(() => {
    //     if()
    // })

    const handleSignUp = () => {
        if(!email || !password || !name) {
           return alert('모든 항목을 다 기입하셔야 합니다.')
        } else if(password !== passwordCheck) {
           return alert('재확인 비밀번호가 다릅니다 다시 확인해주세요.')        
        }
        axios.post("주소", {
            name: name,
            email: email,
            password: password
        })
        .then((res) => {
            history.push('/user/signin')
        })
    }
    return (
        <div>
            <div>
                <input placeholder="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder="check password" onChange={(e) => setPasswordCheck(e.target.value)}/>
            </div>
            <button onClick={handleSignUp}>회원가입</button>
        </div>
    );
};

export default SignUp;