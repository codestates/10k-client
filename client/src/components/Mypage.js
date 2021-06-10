import axios from 'axios';
import { useState } from 'react';

const Mypage = (props) => {

    return (
        <div>
            <button>로그아웃</button>
            <button>회원탈퇴</button>
            {/*회원탈퇴에 alert 띄우기*/}
            <div>
                <span>user info</span>
            </div>
            <div>
                <input />
                <button>목표 등록</button>
            </div>
            <ul>
                <li>
                    <span>목표 1</span>
                    <span>총 시간/누적 시간</span>
                </li>
                <li>
                    <span>목표 2</span>
                    <span>총 시간/누적 시간</span>
                </li>
                <li>
                    <span>목표 3</span>
                    <span>총 시간/누적 시간</span>
                </li>
            </ul>
        </div>
    )
}

export default Mypage;