import React, { Component } from 'react';
// import img from "./imageSlider";
class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            imgId : 0,
            imgArr: require('./Images/1.jpeg')
        }
    }
    async plusSlides(event) {
        const imgArr = [require("./Images/1.jpeg"),require("./Images/2.jpg"), require("./Images/3.jpeg"), require("./Images/4.jpg")];
        var count = imgArr.length;
        if(event<0) {
            event = -event;
        }
        var id = this.state.imgId + event;
        if(id >= 0 && id <3) {
            var newId = id;
        } else {
            var newId = (id%count);
        }
        var imgPath = imgArr[newId];
        console.log('id', newId, imgPath);
        await this.setState({
            imgArr : imgPath,
            imgId : newId
        });
        // console.log(this.state);
    }
    
    render() {
        return (
            <div className="imageSlider">
                <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                <img src={this.state.imgArr} className="center"/>
            </div>
        );
    }
}

export default Home;