import React from "react";

function User({ user, onRemove, onToggle }) {
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
