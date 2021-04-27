import React, {Component} from 'react';
import {BottomNavigationAction} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class Radompiclist extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <GridList>
                    <GridListTile>
                        <img src={{'../img/test.png'}}/>
                    </GridListTile>

                </GridList>
            </div>
        );
    }

}

export  default  Radompiclist
