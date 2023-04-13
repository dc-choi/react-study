import React, { useState, useRef, useMemo, useCallback } from 'react';

import Hello from './component/Hello';
import Bye from './component/Bye';
import Wrapper from './component/Wrapper';
import Counter from './component/Counter';
import InputSample from './component/InputSample';
import UserList from './component/UserList';
import CreateUser from './component/CreateUser';

import './style/App.css'

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

// context API를 사용하면 전역적으로 관리할 수 있는 값을 관리할 수 있음.
// 여기서 값은 상태가 아니여도 함수일 수 있고, 외부 라이브러리 인스턴스일 수 도 있고, DOM일 수도 있음.
// context API를 UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);
// Provider라는 컴포넌트가 있는데, 이 컴포넌트를 사용해서 context의 값을 정할 수 있음. value로 값을 정해줌.
// 가져오는 dispatch는 전역에서 관리하려고 하는 상태이다.
// <UserDispatch.Provider value={dispatch}>...</UserDispatch.Provider>

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
    const onCreate = useCallback(
        () => {
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
        },
        [ users, username, email ]
    );

    const onRemove = useCallback(
        id => {
            // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
            // = user.id 가 id 인 것을 제거함
            setUsers(users.filter(user => user.id !== id));
        },
        [ users ]
    );

    const onToggle = useCallback(
        id => {
            setUsers(
                users.map(user =>
                    user.id === id ? { ...user, active: !user.active } : user
                )
            );
        },
        [ users ]
    );

    /**
     * useMemo를 사용하면 이 전에 계산한 값을 재사용할 수 있음.
     * 그래서 이 Hook을 사용하면 성능을 최적화 할 수 있음.
     */
    const count = useMemo(() => countActiveUsers(users), [ users ]);

    /**
     * useMemo와 비슷한 기능을 하는 Hook임.
     * 이 Hook은 이 전에 사용한 함수를 재사용할 수 있음.
     *
     * 함수 안에서 사용하는 state 혹은 props가 있다면 꼭 deps 배열안에 포함시켜야 함.
     * deps 배열안에 함수에서 사용하지 않는 값을 넣는다면 함수에서 해당 값을 참조할 때 가장 최신 값을 참조한다고 보장할 수 없음.
     */
    const onChange = useCallback(
        e => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value
            });
        },
        [ inputs ]
    );

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
            <div>활성사용자 수 : {count}</div>
            <Bye />
        </>
    );
}

export default App;
