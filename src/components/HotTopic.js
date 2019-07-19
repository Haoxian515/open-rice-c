import React, { Component } from 'react';
import {connect} from "react-redux";

import "./HotTopic.css"
import altImage from "../assets/drone.jpg"
import image from "../assets/minced.jpg"



import Slideshow from "./Slideshow.js"

class HotTopic extends Component{

    _isMounted = false;

    constructor(props){
        super(props)
        
        this.state = {
            venuePhoto: image,
        }

    }
    componentWillReceiveProps(){
        this._isMounted = true;
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    
    render(){
        if(this._isMounted){
            return(
                <div className="hot-topic-container">
                    <div className="hot-topic">

                        <div className = "hot-topic-nav" ><h3>Top to chill places you should visit</h3></div>
                        <Slideshow />
                    </div>
                </div>
            )
        }else{
            return(<div></div>)
        }
    }

}

function mapStateToProps(reduxState){
    return{

    }
}

export default connect(mapStateToProps,{} )(HotTopic)