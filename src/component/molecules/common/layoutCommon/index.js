import React from 'react';

const LayoutCommon = ({children}) => {
    return (
        <div>
            <h4>Header Admin</h4>
            {children}
            <h5>Footer Admin</h5>
        </div>
    );
};

export default LayoutCommon;