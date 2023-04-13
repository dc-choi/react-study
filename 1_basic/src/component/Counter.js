import React, { useState, useReducer } from "react";

function Counter() {
    // 컴포넌트에서 동적인 값을 상태라고 부름.
    // 리액트에서는 이 상태를 useState라는 함수로 관리함.
    // const [ number, setNumber ] = useState(0); // 비 구조화 할당으로 간결하게 표현함.

    // 상태를 관리하는 또 다른 방법이다.
    // 이 Hook을 사용하면 상태 변경하는 부분을 컴포넌트 바깥에 작성할 수 있음.
    const [ number, dispatch ] = useReducer((state, action) => {
        switch (action.type) {
            case '+':
                return state + 1;
            case '-':
                return state - 1;
            default:
                return state;
        }
    }, 0);

    /**
     * useReducer vs useState
     *
     * 컴포넌트에서 관리하는 값이 딱 하나이고 그 값이 단순한 숫자, 문자열 또는 boolean이라면 useState
     * 하지만 컴포넌트에서 관리하는 값이 여러개가 되어서 상태의 구조가 복잡해진다면 useReducer가 편할 수 있음.
     */

    const add = () => {
        // setNumber(prevNumber => prevNumber  + 1);
        dispatch({ type: '+' });
    };

    const remove = () => {
        // setNumber(prevNumber => prevNumber - 1);
        dispatch({ type: '-' });
    };

    return (
        <>
            <h1>{number}</h1>
            <button onClick={add}>+1</button>
            <button onClick={remove}>-1</button>
        </>
    )
}

export default Counter;
