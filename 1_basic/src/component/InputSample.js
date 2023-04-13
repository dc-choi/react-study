import React, { useState, useRef } from 'react';

function InputSample() {
    const [ inputs, setInputs ] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef(); // ref 객체를 만든다.

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        /**
         * 만약 inputs[name] = value 이런식으로 기존 상태를 직접 수정하게 되면 값이 바뀌어도 리렌더링이 되지 않음.
         * 이런 작업을 불변성을 지킨다고 표현하고 이 불변성을 지켜야지만 리액트 컴포넌트에서 상태가 업데이트됨을 감지할 수 있고 이에 따라 필요한 리렌더링이 진행됨.
         *
         * 결론적으로 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 함.
         */
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    };

    return (
        // input의 상태를 관리할 때는 input 태그안의 값도 같이 관리해야 함.
        // DOM을 직접 관리해야하는경우 ref를 사용해서 해당 DOM을 가르키도록 한다.
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name} ({nickname})</b>
            </div>
        </div>
    );
}

export default InputSample;
