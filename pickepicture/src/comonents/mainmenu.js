import React, {Component} from 'react';
import {BottomNavigationAction} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

class Mainmenu extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BottomNavigation

                    showLabels
                >
                    <BottomNavigationAction label="Recents" icon={<AccessAlarm/>} />
                    <BottomNavigationAction label="Favorites" icon={<AccessAlarm/>} />
                    <BottomNavigationAction label="Nearby" icon={<AccessAlarm />} />
                </BottomNavigation>
            </div>
        );
    }

}

export  default  Mainmenu
