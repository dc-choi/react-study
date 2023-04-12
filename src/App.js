import React, { useState, useRef } from 'react';

import Hello from './component/Hello';
import Bye from './component/Bye';
import Wrapper from './component/Wrapper';
import Counter from './component/Counter';
import InputSample from './component/InputSample';
import UserList from './component/UserList';
import CreateUser from './component/CreateUser';

import './style/App.css'

function App() {
    const name = 'React';

    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    };

    const [ users, setUsers ] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);

    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const { username, email } = inputs;

    const nextId = useRef(users.length + 1);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        /**
         * 객체의 불변성을 위해서 기존 객체를 직접 수정하면 안됨.
         */
        setUsers([...users, user]); // 1. ...연산자를 사용해서 기존 객체를 복사 후 새 배열을 생성함.
        // setUsers(users.concat(user)); // 2, concat()은 기존 배열을 수정하지 않고 새로운 원소가 추가된 새 배열을 생성함.

        setInputs({
            username: '',
            email: ''
        });

        nextId.current += 1;
    };

    const onRemove = id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users.filter(user => user.id !== id));
    };

    const onToggle = id => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    return (
        <>
            <Wrapper>
                { /** 리액트에서의 주석 */ }
                { /** isSpecial의 값을 생략하면 true */ }
                <Hello name={name} color="red" isSpecial={true}
                    // 열리는 태그에서 주석이 가능
                />
            </Wrapper>
            <Hello color="pink"/>
            <div style={style}>{name}</div>
            <div className="gray-box"></div>
            <Counter />
            <InputSample />
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <Bye />
        </>
    );
}

export default App;
