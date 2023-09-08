import React from 'react';

const Logo = () => {
    return (
        <div>
            <div className="logo">
                {/* Les images importées depuis IMG sont accessibles dans "public" */}
                <img src="./logo192.png" alt="logo react" />
                <h3>React World</h3>
            </div>
        </div>
    );
};

export default Logo;