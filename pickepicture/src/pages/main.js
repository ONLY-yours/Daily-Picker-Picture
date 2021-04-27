import React, {Component} from 'react';
import Link from "@material-ui/core/Link";
import Mainmenu from "../comonents/mainmenu";
import Leftnavigation from "../comonents/leftnavigation";

class Main extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div style={{
                width:"100vw",
                height:"100vh",
                display:"flex"
            }}>

                <div style={{
                    width:"65px",
                    height:"100%"
                }}>
                    <Leftnavigation></Leftnavigation>
                </div>

                <div style={{
                    flex:"1",
                    display:"flex",
                    flexDirection:"column"
                }}>

                    <div style={{
                        height:"60px",
                        width:"100%"
                    }}>
                        <Mainmenu></Mainmenu>

                    </div>

                    <div style={{
                        flex:"1",
                        width:"100%",
                        height:"100%",
                        backgroundColor:"#545454"
                    }}>

                    </div>

                </div>




            </div>
        )
    }

}

export  default  Main
