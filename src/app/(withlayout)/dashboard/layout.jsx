import Footer from '@/components/shared/Footer';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div className='min-h-screen'>{children}</div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;