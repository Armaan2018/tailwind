import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from './Navigation/Navigator';

const MainMenu = () => {
    return (
        <div>
           <Navigator></Navigator>
           <Outlet></Outlet>
        </div>
    );
};

export default MainMenu;