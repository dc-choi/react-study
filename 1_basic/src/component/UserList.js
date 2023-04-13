import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
    /**
     * useEffect는 컴포넌트가 마운트, 언마운트, 업데이트 될 때 특정 작업을 처리할 수 있는 Hook이다.
     * 첫번째 인자에는 콜백, 두번째 인자에는 의존값이 들어가는 배열을 넣음.
     *
     * useEffect에서는 함수를 반환할 수 있는데 이를 CleanUp 함수라고 부릅니다.
     * CleanUp 함수는 useEffect에 대한 뒷정리를 해준다.
     *
     * 두번째 인자가 없다면 이 CleanUp 함수가 실행됨.
     *
     * 마운트시에 주로 하는 작업들은 다음과 같음.
     * 1. props로 받은 값을 컴포넌트의 로컬 상태로 설정
     * 2. 외부 API 요청
     * 3. 라이브러리 사용(D3, Video.js 등등...)
     * 4. setInterval을 통한 반복작업 혹은 setTimeout을 통한 작업 예약
     *
     * 언마운트시에 주로 하는 작업들은 다음과 같음.
     * 1. setInterval, setTimeout을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
     * 2. 라이브러리 인스턴스 제거
     */
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        console.log(user);
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
            console.log(user);
        };
    }, [ user ]);
    /**
     * 두번째 인자인 deps에 값을 넣으면 마운트, 언마운트, 값이 바뀔때, 바뀌기 직전에 호출이 됨.
     *
     * useEffect안에서 사용하는 state나 props가 있다면, useEffect의 deps에 넣어주어야 함. 그렇게 하는게 규칙임.
     * 만약, useEffect안에서 사용하는 state나 props를 deps에 넣지 않게 된다면 useEffect에 등록한 함수가 실행될 때 최신 state/props를 가르키지 않게 됨.
     *
     * deps를 생략한다면 컴포넌트가 리렌더링될 때마다 호출이 됨.
     * 참고로 리액트 컴포넌트는 기본적으로 부모컴포넌트가 리렌더링되면 자식 컴포넌트 또한 바뀐 내용이 없어도 리렌더링이 됩니다.
     *
     * 물론, 실제 DOM 에 변화가 반영되는 것은 바뀐 내용이 있는 컴포넌트에만 해당합니다. 하지만, Virtual DOM 에는 모든걸 다 렌더링하고 있다는 겁니다.
     */
    //

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <>
            {users.map(user => (
                // key를 두는 것이 배열의 수정이 일어날 경우 리렌더링이 효율적으로 된다고 함.
                // key가 지정되지 않으면 배열 전부의 수정이 일어나지만, key가 지정되면 key에 해당하는 원소만 없앰.
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </>
    );
}

export default UserList;
