function Body(props) {
    const list = props.result.map((item) => {
        return <li id={item.id} key={item.id}>{item.name}</li>;
    });

    return (
        <div>
            <p>{props.content}</p>
            <ul onClick={(event) => {
                event.preventDefault();
                alert(event.target.id);
            }}>{list}</ul>
            <p onClick={(event) => {
                event.preventDefault();
                alert('click');
            }}>click</p>
        </div>
    );
}

export default Body;
