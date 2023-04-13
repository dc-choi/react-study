import React from "react";

// 상위 컴포넌트에서 넘겨주는 값.
// 비 구조화 할당을 통해서 간결하게 작성 가능.
function Hello(props) { // { name, color }
    // Fragment를 사용하여 별도의 엘리먼트로 사용하지 않음.
    return (
        <>
            <h1 style={{ color: props.color}}>
                { props.isSpecial ? '*' : null }
                { props.isSpecial && '*' }
                안녕하세요. {props.name}
            </h1>
        </>
    )
}

// defaultProps이다. 상위 컴포넌트에서 props를 설정해주지 않았을 때 사용됨.
Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;
