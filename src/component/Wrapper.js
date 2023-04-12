import React from 'react';

// 상위 컴포넌트에서 넘겨주는 컴포넌트를 출력함.
function Wrapper(props) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };

    return (
        // 상위 컴포넌트에서 넘겨주는 컴포넌트를 출력함.
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Wrapper;
