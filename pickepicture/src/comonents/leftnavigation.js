import React, {Component} from 'react';
import {BottomNavigationAction, IconButton} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import LinkIcon from '@material-ui/icons/Link';
import FeedbackIcon from '@material-ui/icons/Feedback';
class leftnavigation extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                width:"100%",
                display:"flex",
                height:"100%",
                flexDirection:"column",
            }}>
                <IconButton style={{
                    width:"30px",
                    height:"30px",
                    padding:"30px"
                }}>
                    <HomeIcon />
                </IconButton>

                <IconButton style={{
                    width:"30px",
                    height:"30px",
                    padding:"30px"
                }}>
                    <DescriptionIcon />
                </IconButton>


                <IconButton style={{
                    width:"30px",
                    height:"30px",
                    padding:"30px"
                }}>
                    <LocalCafeIcon />
                </IconButton>


                <IconButton style={{
                    width:"30px",
                    height:"30px",
                    padding:"30px"
                }}>
                    <LinkIcon />
                </IconButton>

                <IconButton style={{
                    width:"30px",
                    height:"30px",
                    padding:"30px"
                }}>
                    <FeedbackIcon />
                </IconButton>

                <div style={{
                    flex:"1",
                    backgroundColor:"#EFF5FB"

                }}>
                </div>

            </div>
        );
    }

}

export  default  leftnavigation
