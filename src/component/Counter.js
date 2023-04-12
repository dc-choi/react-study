import React, { useState } from "react";

function Counter() {
    // 컴포넌트에서 동적인 값을 상태라고 부름.
    // 리액트에서는 이 상태를 useState라는 함수로 관리함.
    const [ number, setNumber ] = useState(0); // 비 구조화 할당으로 간결하게 표현함.

    const add = () => {
        setNumber(prevNumber => prevNumber  + 1);
    };

    const remove = () => {
        setNumber(prevNumber => prevNumber - 1);
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
