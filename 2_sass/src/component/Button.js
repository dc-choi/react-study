import React from 'react';
import classnames from 'classnames';

import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...event }) {
    return (
        <button
            className={classnames('Button', size, color, { outline, fullWidth })}
            {...event}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button;
