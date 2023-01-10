import { useState } from "react";

function Footer(props) {
    const [ count, setCount ] = useState(0);
    const [ content, setCotent ] = useState(props.content);

    return (
        <footer>
            <p onClick={() => {
                setCotent(`i want to be a fullstack developer`);
            }}>{content}</p>
            <p>{count}</p>
            <p onClick={() => {
                setCount(0);
            }}>setCountZero</p>
            <p onClick={() => {
                setCount(count + 1);
            }}>addCount</p>
        </footer>
    );
}

export default Footer;
