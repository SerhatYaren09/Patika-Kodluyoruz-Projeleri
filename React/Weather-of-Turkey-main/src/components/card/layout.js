import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='h-screen overflow-x-hi'>
            <main className='mx-auto h-full'>
                {children}
            </main>
        </div>
    )
};

export default Layout;